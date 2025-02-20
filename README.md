# AI Chatbot React Website

This project is a simple **React.js** website that includes an open-source AI chatbot.

## 🚀 Getting Started

### Clone the Repository
If you want to start with an existing project, clone it from GitHub:
```sh
 git clone https://github.com/mithleshupadhyay/ai-chatbot-react-website.git
 cd ai-chatbot-react-website
 npm install
 npm start
```

---

### 📦 Create Manually from Scratch
If you prefer creating the project manually, follow these steps:
```sh
npx create-react-app ai-chatbot-react-website
cd ai-chatbot-react-website
npm start
```
Now open `http://localhost:3000/` in your browser.

### 🖌 Modify the Website
You can modify `App.js` to change the text and logo image displayed on `http://localhost:3000/`.

---

## 🤖 Adding AI Chatbot to the Website
### 📁 Folder Structure
Create a `ChatWidget` directory inside `src`, structured as follows:
```
src/
│── App.css
│── App.js
│── ChatWidget/
│   ├── config.js
│   ├── index.jsx
│   ├── ModalWindow/
│   │   └── index.jsx
│   └── styles.js
│── index.css
│── index.js
│── logo.svg
│── mithlesh.jpeg
│── reportWebVitals.js
│── setupTests.js
```

### 📄 Add the Required Files
Create and add the following files inside `ChatWidget`:
- `config.js`
- `index.jsx`
- `ModalWindow/index.jsx`
- `styles.js`

You can copy and paste the code for these files from the original repository:
[ChatWidget GitHub Repository](https://github.com/mithleshupadhyay/ai-chatbot-react-website/tree/main/src/ChatWidget)

---

### 🔗 Integrate the Chatbot
Modify `App.js` to include the chatbot:
```jsx
import ChatWidget from "./ChatWidget";

return (
    <div>
        ... other code
        <ChatWidget />
    </div>
);
```

---

## 📌 Running the Project
### Install Dependencies
Ensure that `react-icons` is installed for Bootstrap icons:
```sh
npm install react-icons
```

### Set Up Environment Variables
- Rename `.env.template` to `.env`.
- Copy and paste your **Groq API key** from the Groq Console to enable the AI chatbot.

### Start the Development Server
```sh
npm start
```
Now, you can access the chatbot on `http://localhost:3000/` and start chatting! 🚀
