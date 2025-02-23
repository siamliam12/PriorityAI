# PriorityAI

An AI-powered solution for customer inquiry systems — built for the IBM Granite AI Hackathon by Team Semantics (solo developer: MD Siam Ahmed).

## 🚀 About the Project

**PriorityAI** is an AI-driven system designed to help medium to large businesses sort and prioritize customer inquiries based on their content. The project aims to streamline customer service processes by automatically categorizing incoming queries, allowing support teams to focus on what matters most.

## ✨ Features

- **AI-Powered Inquiry Sorting:** Automatically categorizes customer inquiries using AI.
- **Real-time Prioritization:** Ensures urgent requests are flagged and handled promptly.
- **User-Friendly Interface:** Simple design focused on functionality.
- **Scalable Backend:** Built to handle growing data and user demands.
- **Hackathon-Ready MVP:** Functional prototype created in under 48 hours.

## 🏗️ Tech Stack

### Languages
- **Python** (Backend and AI integration)
- **TypeScript** (Frontend development)

### Frontend
- **Next.js** (React framework for server-side rendering and static site generation)

### Backend
- **FastAPI** (High-performance web framework for building APIs with Python)

### Database
- **Supabase** (Open-source Firebase alternative)
- **PostgreSQL** (Relational database for structured data storage)

### AI
- **Langflow** (Visual framework for designing and deploying LLM-powered workflows)
- **Cohere** (NLP platform for AI model integration)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PriorityAI.git
cd PriorityAI
```

2. Set up the backend:
```bash
# Create a virtual environment
python -m venv env
source env/bin/activate # or "env\\Scripts\\activate" on Windows

# Install dependencies
pip install -r backend/requirements.txt

# Run FastAPI server
cd backend
uvicorn main:app --reload
```

3. Set up the frontend:
```bash
# Install dependencies
cd ../frontend
npm install

# Run Next.js server
npm run dev
```

4. Add environment variables:
Create a `.env` file in both the `backend` and `frontend` directories with the necessary API keys and database credentials.

## 🚨 Usage

- Access the frontend at `http://localhost:3000`
- API endpoints available at `http://localhost:8000`
- Ensure Supabase and PostgreSQL are set up with correct credentials.

## 🏃 Roadmap

- [ ] Improve mobile responsiveness
- [ ] Optimize AI models for better accuracy
- [ ] Implement user authentication
- [ ] Add email notifications for high-priority inquiries
- [ ] Deploy on cloud platform

## 📚 Resources

- [IBM Granite AI Hackathon](https://lablab.ai/event/generative-ai-hackathon-with-ibm-granite)
- [Langflow Documentation](https://docs.langflow.org/)
- [Cohere API Docs](https://docs.cohere.com/cohere-documentation)

## 🎬 Demo
A live demo and project breakdown will be available soon on:
- **[YouTube Podcast](https://www.youtube.com/@lunstra_studios)**
- **[Dev.to](https://dev.to/siam_ahmed_686b7476076fdb)**
- **[Article Website](https://the-nerdy-espresso.vercel.app/)**

## 🏅 Acknowledgments

Special thanks to the IBM Granite AI Hackathon organizers and my fellow developers for the inspiration and support.

---

Feel free to raise issues, contribute to the project, or share feedback!

**MD Siam Ahmed**  
[GitHub](https://github.com/siamliam12) | [LinkedIn](https://www.linkedin.com/in/siam-ahmed-349b241b9/) 

---

**#PriorityAI #AIPowered #IBMGraniteAIHackathon #SoloDeveloper #FastAPI #NextJS #HackathonProject**

