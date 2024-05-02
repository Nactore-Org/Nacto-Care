# Datatype validation schema using pydantic
from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID
from datetime import datetime, date

class NurseBase(BaseModel):
    nurse_id: Optional[UUID]
    nurse_name: str
    nurse_email: str
    nurse_city: str
    nurse_created_at: Optional[datetime]
    nurse_dob: date
    nurse_phone_number: str

class PatientBase(BaseModel):
    patient_id: Optional[UUID]
    patient_name: str
    patient_email: EmailStr
    patient_created_at: Optional[datetime]
    patient_phone_number: str
    patient_address: str
    patient_dob: date
    patient_city : str
