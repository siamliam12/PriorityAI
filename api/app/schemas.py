from pydantic import BaseModel
from typing import Optional, Literal


class TicketSchema(BaseModel):
    user_id : Optional[str]
    ticket_number : Optional[int]
    date:Optional[str]
    complaint_title : Optional[str]
    complaint : Optional[str]
    severity : Optional[Literal['Low', 'Medium', 'High']]

# Schema for updating tickets
class TicketUpdateSchema(BaseModel):
    severity: Optional[Literal['Low', 'Medium', 'High']]