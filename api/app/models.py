from sqlalchemy import Column,Integer,String,DateTime,Boolean, Enum
# from database import Base
import datetime
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class Ticket(Base):
    __tablename__ = "ticket"
    id = Column(Integer, primary_key=True,index=True)
    user_id = Column(String)
    ticket_number = Column(Integer)
    date = Column(String)
    complaint = Column(String)
    severity = Column(Enum('Low', 'Medium', 'High', name='severity_levels'))