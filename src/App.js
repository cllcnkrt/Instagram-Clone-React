import "./App.css";
import Post from "./Post";
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="/images/logo.png"         
        />
      </div>

      <Post/>


    </div>
  );
}

export default App;
