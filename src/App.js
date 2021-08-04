import { useState } from "react";
import "./App.css";
import Post from "./Post";
function App() {

  const [posts, setPosts] = useState([
    {
      username:"meddison",
      caption:"Sunday Funday",
      imageUrl:"https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      username:"meddison",
      caption:"Sunday Funday",
      imageUrl:"https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg?cs=srgb&dl=pexels-perfecto-capucine-1247526.jpg&fm=jpg"
    },
    {
      username:"Jeniffer",
       caption:"Coming soon",
      imageUrl:"https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="/images/logo.png"         
        />
      </div>
      {
        posts.map((post,index) =>(
          <Post 
          key={index}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          />
        ))
      }
      

    </div>
  );
}

export default App;
