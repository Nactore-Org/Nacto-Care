# Datatype validation schema using pydantic
from pydantic import BaseModel, EmailStr
from uuid import UUID
from datetime import datetime, date

class NurseBase(BaseModel):
    nurse_id: UUID
    nurse_name: str
    nurse_email: str
    nurse_city: str
    nurse_created_at: datetime
    nurse_dob: date
    nurse_phone_number: str

class PatientBase(BaseModel):
    patient_id: UUID
    patient_name: str
    patient_email: EmailStr
    patient_created_at: datetime
    patient_phone_number: str
    patient_address: str
    patient_city : str
