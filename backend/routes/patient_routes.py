from fastapi import APIRouter
from database import SessionLocal, engine
patient_router = APIRouter(prefix="/patient", tags=["Patient"])

session = SessionLocal(bind=engine)

@patient_router.get("/")
def get_patient():
    return {"message": "Get all patients details"}
