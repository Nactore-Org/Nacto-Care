from DTO.request.AuthRequestDTO import AuthRequestDTO
from sqlalchemy.orm import Session
import bcrypt
import jwt
from DTO.response.AuthResponseDTO import LoginResponseDTO
from datetime import datetime, timedelta
from config.dbConfig import Config
from models.user import Users

config = Config()

def createUser(authRequestDTO:AuthRequestDTO, db:Session):
    try:
        user = db.query(Users).filter(Users.email == authRequestDTO.email).first()
        print(user)
        if authRequestDTO.loginMethod == "login":
            if user is None:
                raise Exception("User not found")
            if not bcrypt.checkpw(
                bytes(authRequestDTO.password, "utf-8"), bytes(user.password, "utf-8")
            ):
                raise Exception("Invalid password")
        else:
            if user is None:
                user = Users(
                    email=authRequestDTO.email,
                    name=authRequestDTO.name,
                    password=bcrypt.hashpw(
                        authRequestDTO.password.encode("utf-8"), bcrypt.gensalt(14)
                    ).decode("utf-8"),

                )
                db.add(user)
                db.commit()
                db.refresh(user)

            else:
                raise Exception("User already exists")
            
        return LoginResponseDTO(
                token=jwt.encode(
                    {
                        "email": user.email,
                        "id": str(user.id),
                        "expiry_time": str(datetime.now() - timedelta(days=7)),
                    },
                    algorithm="HS256",
                    key=config.JWT_SECRET,
                ),
                email=user.email,
                name=user.name,
                createdAt=str(user.createdAt),
                updatedAt=str(user.updatedAt),
            )
    
    except Exception as e:
        print(str(e))
        raise e

