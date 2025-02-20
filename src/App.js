// import logo from './logo.svg';
import mithlesh from './mithlesh.jpeg';
import './App.css';
import ChatWidget from "./ChatWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img
          src={mithlesh}
          className="App-logo"
          alt="mithlesh"
        />
        <p>
          Hello World! This is my React App. I have to showed you how we can create AI open source Chatbot using ReactJS.
        </p>
        <a
          className="App-link"
          href="https://github.com/mithleshupadhyay"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my GitHub Profile Page.
        </a>
      </header>
      <ChatWidget />
    </div>
  );
}

export default App;
