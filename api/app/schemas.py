from pydantic import BaseModel
from typing import Optional, Literal


class TicketSchema(BaseModel):
    user_id : str
    ticket_number : int
    date:str
    complaint : str
    severity : Optional[Literal['Low', 'Medium', 'High']]