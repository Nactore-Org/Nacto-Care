from fastapi import APIRouter,Depends
from views.user import createUser
from DTO.request.AuthRequestDTO import AuthRequestDTO
from sqlalchemy.orm import Session
from database.dbConnection import get_db

router = APIRouter(prefix="/auth")

@router.post("")
async def loginOrRegister(authRequestDTO: AuthRequestDTO, db: Session = Depends(get_db)):
    return createUser(authRequestDTO, db)
