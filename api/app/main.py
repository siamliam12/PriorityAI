
from fastapi import FastAPI,Depends,HTTPException,status
import schemas
import models
from database import engine,sessionlocal
from sqlalchemy.orm import Session

app = FastAPI()

models.Base.metadata.create_all(engine)
def get_session():
    db = sessionlocal()
    try:
        yield db
        print("Database Connected")
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post('/create-ticket',response_model=schemas.TicketSchema)
def create_ticket(ticket:schemas.TicketSchema,db:Session=Depends(get_session)):
    existing_ticket =  db.query(models.Ticket).filter(models.Ticket.ticket_number==ticket.ticket_number).first()
    if existing_ticket:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Ticket already exists")
    db = sessionlocal()
    db_ticket = models.Ticket(**ticket.dict())
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
    return db_ticket