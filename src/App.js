import logo from './logo.svg';
import './App.css';
import MyAvatar from './MyAvatar.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MyAvatar} alt="My Avatar" width="500" height="500"/>
        <p>
            Welcome to my page
        </p>
        <a href='https://restful-api-homework.herokuapp.com/message'>Click here to view my info</a>
        <h2>This is my favorite song. Let's enjoy it</h2>
         <iframe width="500" height="500" src="https://www.youtube.com/embed/ecBco63zvas">
         </iframe>
      </header>
    </div>
  );
}

export default App;
