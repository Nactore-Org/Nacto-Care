from typing import Annotated
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Path
from starlette import status
from models import Nurses
from .auth_routes import get_current_patient
from passlib.context import CryptContext
from database import SessionLocal, engine
nurse_router = APIRouter(prefix="/nurse", tags=["Nurse"])

session = SessionLocal(bind=engine)

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_patient)]
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


@nurse_router.get('/get_all_nurses', status_code=status.HTTP_200_OK)
async def get_all_patients(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail='Authentication Failed')
    return db.query(Nurses).all()
