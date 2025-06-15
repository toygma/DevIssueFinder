# DevIssueFinder

**DevIssueFinder** is a full-stack web application that helps full-stack developers easily discover GitHub issues to contribute to — filtered by programming language, issue label, repository activity, and more.

Built with **React** on the frontend and **Node.js + Express** on the backend.

---

## 🌟 Features

- 🔍 Search GitHub issues by:
  - Language (JavaScript, Python, etc.)
  - Labels (e.g., `good first issue`, `help wanted`)
  - Number of stars or forks
  - Issue activity (recently updated)
- 💾 Save issues or repos to a personal list (optional, for registered users)
- 📄 Simple and clean UI with responsive design
- 🧠 Intelligent filters to avoid inactive or archived repositories

---

## 🚀 Tech Stack

### Frontend
- React (with Hooks)
- Axios
- Tailwind CSS (or Bootstrap)

### Backend
- Node.js
- Express.js
- GitHub REST API v3

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/devissuefinder.git
cd devissuefinder

2. Install dependencies
Backend:cd server npm install
Frontend:cd client npm install

3. Set up environment variables
Create a .env file in the /server directory:
GITHUB_TOKEN=your_github_personal_access_token
PORT=5000

You need a GitHub token to avoid rate limits when using the GitHub API.

4. Run the application
Backend:
npm run dev
Frontend:

cd ../client
npm start
📁 Folder Structure
devissuefinder/
├── client/           # React frontend
│   ├── src/
│   └── public/
├── server/           # Express backend
│   ├── routes/
│   └── controllers/
├── README.md

🤝 Contributing
Pull requests are welcome! If you find a bug or have a feature request, feel free to open an issue.

📄 License
This project is licensed under the MIT License.

💬 Contact
If you have questions or suggestions, feel free to reach out:

GitHub: @toygma

Email: toygunbektasoglu@gmail.com

---

Let me know if you’d like this adjusted to TypeScript, MongoDB, or with authentication features like GitHub OAuth.
