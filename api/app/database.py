from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base
# from models import Base
from sqlalchemy.orm import sessionmaker



#postgres url connection string
DATABASE_URL =  "postgresql://postgres.azbstanjskqxiedbjnof:dgT28iDPMtuVGt9u@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
#create a postgres engine instance
engine = create_engine(DATABASE_URL)
 #create declarative base meta instance

# Base = declarative_base()
# base = Base()
#create session local class for session maker
sessionlocal = sessionmaker(bind=engine,expire_on_commit=False)