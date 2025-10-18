# ReachInbox_Assignment
This project is a feature-rich email aggregation system built as part of the ReachInbox backend engineering assignment.
The goal is to design a backend that connects multiple email accounts, synchronizes them in real-time, stores messages in a searchable database, and applies AI-based categorization.

Features Implemented

Real-Time IMAP Synchronization
Connects to multiple email accounts and fetches recent emails using persistent IMAP connections.

Searchable Storage (Elasticsearch)
All emails are indexed and stored locally in Elasticsearch, enabling quick search and filtering.

AI-Based Categorization
Emails are analyzed and automatically labeled as Interested, Not Interested, Spam, Out of Office, or Meeting Booked.

Slack & Webhook Integration (Planned)
Notifications and triggers for specific email categories can be sent to external apps via webhooks or Slack.

Frontend Integration (Planned)
A basic interface to view, filter, and search emails is under development.
 Tech Stack
Component	Technology
Backend Runtime	Node.js (TypeScript)
Database	Elasticsearch (Docker)
Email Protocol	IMAP
AI / Categorization	Custom logic + LLM (RAG approach planned)
Environment Management	dotenv
API Testing	Postman / Browser
Project Structure
ReachInbox_Assignment/
├── node_modules/
├── src/
│   ├── index.ts              # Entry point – starts backend server
│   ├── imap.ts               # Handles IMAP connection & email sync
│   ├── elasticsearch.ts      # Elasticsearch setup and queries
│   ├── ai_categorization.ts  # Logic for automatic labeling
│   └── routes.ts             # API routes (e.g., /sync)
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env
└── README.md

 Setup Instructions
1️. Clone the Repository
git clone https://github.com/<your-username>/ReachInbox_Assignment.git
cd ReachInbox_Assignment

2️.Install Dependencies
npm install

3️.Configure Environment

Create a file named .env in the project root and add your credentials:

EMAIL1=yourgmail1@gmail.com
EMAIL1_PASS=your_app_password1
EMAIL2=yourgmail2@gmail.com
EMAIL2_PASS=your_app_password2
ELASTIC_HOST=https://localhost:9200


 Use Gmail App Passwords (not your normal password).
Generate them at myaccount.google.com/apppasswords
.

4️.Run Elasticsearch with Docker
docker run -d -p 9200:9200 -e "discovery.type=single-node" --name elasticsearch docker.elastic.co/elasticsearch/elasticsearch:8.10.1


If password reset is needed:

docker exec -it elasticsearch bash
/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic -b

5️.Start the Backend Server
npx ts-node src/index.ts


If it starts successfully, you’ll see:

Server started on port 5000
Connected to Elasticsearch

6️.Test the API

Open your browser or use curl:

http://localhost:5000/sync


Expected output:

Emails synced

 AI Categorization Logic

The categorization uses keyword-based detection and optional LLM integration (Retrieval-Augmented Generation).
Example categories:

“Interested” → positive replies or scheduling hints

“Not Interested” → rejection or decline phrases

“Meeting Booked” → calendar or meeting mentions

“Out of Office” → auto-reply detection

“Spam” → irrelevant or promotional content

 Future Enhancements

Full frontend with React for viewing and filtering emails

AI-powered suggested replies using RAG + vector database

Multi-channel outreach integration (Slack, Webhooks, LinkedIn)

JWT-based authentication for user access control

 Author

Mudunoori Rohan Raj
Backend Developer | AI & Cloud Enthusiast

Status

Core backend setup completed

IMAP + Elasticsearch connected

Environment configured successfully

API testing under progress
