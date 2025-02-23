import argparse
import json
import requests
from argparse import RawTextHelpFormatter
from typing import Optional
import warnings
from dotenv import load_dotenv
import os
load_dotenv()
try:
    from langflow.load import upload_file
except ImportError:
    warnings.warn("Langflow provides a function to help you upload files to the flow. Please install langflow to use it.")
    upload_file = None
BASE_API_URL = os.getenv("BASE_API_URL")
LANGFLOW_ID = os.getenv("LANGFLOW_ID")
FLOW_ID = os.getenv("FLOW_ID")
APPLICATION_TOKEN = os.getenv("APPLICATION_TOKEN")
ENDPOINT = os.getenv("ENDPOINT")

TWEAKS = {
    "TextInput-mt9j2": {"input_value": ""},  # Title
    "TextInput-HFf35": {"input_value": ""},  # Complain
}

def run_flow(title: str, complain: str, endpoint: str, application_token: Optional[str] = None) -> dict:
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{endpoint}"

    tweaks = TWEAKS.copy()
    tweaks["TextInput-mt9j2"]["input_value"] = title
    tweaks["TextInput-HFf35"]["input_value"] = complain

    payload = {"tweaks": tweaks}
    headers = {"Authorization": "Bearer " + application_token, "Content-Type": "application/json"}

    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()
    
class AI:
    async def get_severity(title: str, complain: str):
        response = run_flow(
            title=title,
            complain=complain,
            endpoint=ENDPOINT,
            application_token=APPLICATION_TOKEN
        )
        response = json.dumps(response, indent=2)
        data = json.loads(response)
    # Extract the severity value (the "text" field containing "High", "Medium", or "Low")
        severity = data["outputs"][0]["outputs"][0]["results"]["message"]["text"]
        # print(severity)
        return severity
