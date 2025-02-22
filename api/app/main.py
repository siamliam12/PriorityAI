
from fastapi import FastAPI,Depends,HTTPException,status
import schemas
import models
from database import engine,sessionlocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

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

@app.get('/get-ticket')
async def get_ticket(db:Session=Depends(get_session)):
    data = db.query(models.Ticket).all()
    return {"data": data}


@app.get('/get-ticket-by-id/{id}')
async def get_ticket_by_id(id:int,db:Session=Depends(get_session)):
    data = db.query(models.Ticket).filter(models.Ticket.id == id).first()
    if data is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"data": data}


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

@app.put('/update-status/{id}')
async def update_data(id:int,ticket:schemas.TicketUpdateSchema,db:Session=Depends(get_session)):
    db_ticket = db.query(models.Ticket).filter(models.Ticket.id == id).first()
    if ticket is None:
        raise HTTPException(status_code=404, detail="Item not found")
    db_ticket.severity = ticket.severity
    db.commit()
    return {"data": "Data has been updated successfully"}