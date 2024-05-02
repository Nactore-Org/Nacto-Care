from fastapi import APIRouter
from database import SessionLocal, engine
nurse_router = APIRouter(prefix="/nurse", tags=["Nurse"])

session = SessionLocal(bind=engine)

@nurse_router.get("/")
def get_nurse():
    return {"message": "Get all nurse details"}
