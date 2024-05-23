from typing import Annotated
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Path
from starlette import status
from models import Patient
from .auth_routes import get_current_patient
from passlib.context import CryptContext
from database import SessionLocal, engine

patient_router = APIRouter(prefix="/patient", tags=["Patient"])

session = SessionLocal(bind=engine)

#User Verification Model
class UserVerification(BaseModel):
    password: str
    new_password: str = Field(min_length=6)

#Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_patient)]
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


@patient_router.get("/patient", status_code=status.HTTP_200_OK)
async def get_patient(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail='Authentication Failed')
    return db.query(Patient).filter(Patient.patient_id == user.get('id')).first()


@patient_router.put("/change_password", status_code=status.HTTP_204_NO_CONTENT)
async def change_password(user: user_dependency, db: db_dependency, user_verification: UserVerification):
    if user is None:
        raise HTTPException(status_code=401, detail='Authentication Failed')
    user_model = db.query(Patient).filter(
        Patient.patient_id == user.get('id')).first()

    if not bcrypt_context.verify(user_verification.password, user_model.patient_password):
        raise HTTPException(status_code=401, detail='Error on password change')
    user_model.patient_password = bcrypt_context.hash(
        user_verification.new_password)
    db.add(user_model)
    db.commit()
