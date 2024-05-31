from uuid import uuid4
from jose import jwt,JWTError
from fastapi import Form
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from passlib.context import CryptContext
from models import Patient
from database import SessionLocal
from starlette import status
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field
from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from datetime import timedelta, datetime,date
from enum import Enum


class CityChoice(str,Enum):
    DELHI = 'DELHI'
    MUMBAI = 'MUMBAI'
    AHEMBDABAD = 'AHEMBDABAD'
    BANGLORE = 'BANGLORE'
    CHENNAI = 'CHENNAI'


#Custom Request Form in Authentication
class OAuth2EmailRequestForm:
    def __init__(self,email:str=Form(...),password:str=Form(...)):
        self.email=email
        self.password=password

# API Router
auth_router = APIRouter(prefix="/auth", tags=['Authentication'])

# Secret key and algo used for jwt authentication
SECRET_KEY = '197b2c37c391bed93fe80344fe73b806947a65e36206e05a1a23c2fa12702fe3'
ALGORITHM = 'HS256'


bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='auth/login')


# Models for validation
class CreatePatientRequest(BaseModel):
    patient_name:str
    patient_email: str
    patient_password: str
    patient_dob:date
    patient_phone_number:str
    patient_address:str
    patient_city:CityChoice = Field(default=CityChoice.DELHI)


class Token(BaseModel):
    access_token: str
    token_type: str


# Db dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


# Function for authenticating patient
def authenticate_patient(email: str, password: str, db):
    user = db.query(Patient).filter(Patient.patient_email == email).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.patient_password):
        return False
    return user


# Function to create access_token
def create_access_token(email: str, id: str, expires_delta: timedelta):
    encode = {'sub': email, 'id': id}
    expires = datetime.utcnow() + expires_delta
    encode.update({'exp': expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)


# Authenticating the patinet
async def get_current_patient(token: Annotated[str, Depends(oauth2_bearer)]):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get('sub')
        id: str = payload.get('id')
        if email is None or id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail='Could not validate user.')
        return {'patient_email': email, 'patient_id': id}
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail='Could not validate user.')
    

# Route to create a patient
@auth_router.post("/signup", status_code=status.HTTP_201_CREATED)
async def create_user(db: db_dependency,
                      create_patient_request: CreatePatientRequest):
    patient_id = str(uuid4())
    current_time = datetime.utcnow()
    create_user_model = Patient(
        patient_name = create_patient_request.patient_name,
        patient_email=create_patient_request.patient_email,
        patient_password=bcrypt_context.hash(
            create_patient_request.patient_password),
        patient_id=patient_id,
        patient_created_at=current_time,
        patient_dob = create_patient_request.patient_dob,
        patient_phone_number = create_patient_request.patient_phone_number,
        patient_address = create_patient_request.patient_address,
        patient_city = create_patient_request.patient_city.value
    )

    db.add(create_user_model)
    db.commit()


# Route to create access token for a patient
@auth_router.post("/login", response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
                                 db: db_dependency):
    user = authenticate_patient(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail='Could not validate user.')
    token = create_access_token(
        user.patient_email, str(user.patient_id), timedelta(minutes=20))

    return {'access_token': token, 'token_type': 'bearer'}
