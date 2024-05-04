# ORM for the database
from sqlalchemy import Column, String, Date, TIMESTAMP
from sqlalchemy_utils import UUIDType, ChoiceType
from database import Base
from uuid import uuid4

CITY = (
    ('MUMBAI', 'mumbai'),
    ('DELHI', 'delhi'),
    ('AHMEDABAD', 'ahmedabad'),
    ('BANGALORE', 'bangalore'),
    ('CHENNAI', 'chennai')
)

class Nurses(Base):
    __tablename__ = 'nurses'

    nurse_id = Column(UUIDType(binary=False), primary_key=True, default=uuid4)
    nurse_name = Column(String)
    nurse_email = Column(String, unique=True)
    nurse_city = Column(ChoiceType(CITY), default="DELHI")
    nurse_created_at = Column(TIMESTAMP)
    nurse_dob = Column(Date)
    nurse_phone_number = Column(String, unique=True)
    
class Patient(Base):
    __tablename__ = 'patients'

    patient_id = Column(UUIDType(binary=False), primary_key=True, default=uuid4)
    patient_name = Column(String)
    patient_email = Column(String, unique=True)
    patient_created_at = Column(TIMESTAMP)
    patient_dob = Column(Date)
    patient_phone_number = Column(String, unique=True)
    patient_address = Column(String)
    patient_city = Column(ChoiceType(CITY), default="DELHI")
