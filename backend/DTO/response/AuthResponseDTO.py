from pydantic import BaseModel
from typing import Optional


class LoginResponseDTO(BaseModel):
    token: str
    name: str
    email: str
    createdAt: Optional[str]
    updatedAt: Optional[str]
