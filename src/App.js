import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./component/VideoCard/VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app_top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          alt=""
        />
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        {reels.map(({ channel, song, url, likes, shares, avatarSrc }) => (
          <VideoCard
            channel={channel}
            song={song}
            avatarSrc={avatarSrc}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
