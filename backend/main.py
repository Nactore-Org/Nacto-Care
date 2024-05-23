# Import Dependencies
from fastapi import FastAPI
from database import engine, Base

# Import Routes
from routes.nurse_routes import nurse_router
from routes.patient_routes import patient_router
from routes.auth_routes import auth_router


# Backend Application Initilization
app = FastAPI(title="Nacto-Care Backend")

# Connection with the database
Base.metadata.create_all(bind=engine)

# Root Endpoint
@app.get("/")
def server_started():
    return {"message": "Server started successfully"}

# Include the routes
app.include_router(nurse_router)
app.include_router(patient_router)
app.include_router(auth_router)
