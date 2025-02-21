from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '../../.env')
load_dotenv(dotenv_path)


# Get the database URL from environment variables
database_url = os.getenv("DATABASE_URL")

# Create a postgres engine instance
engine = create_engine(database_url)

# Create session local class for session maker
sessionlocal = sessionmaker(bind=engine, expire_on_commit=False)