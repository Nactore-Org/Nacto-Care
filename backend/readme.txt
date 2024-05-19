1.add database credentials in local.ini in config folder
2. pip install -r requirements.txt
3.alembic revision --autogenerate
4.alembic upgrade head
5. run using uvicorn main:app --reload
6. test api

for changes in models :
here alembic used for creating migrations.After changes in model:
1. run -> alembic revision --autogenerate
2. run-> alembic upgrade head