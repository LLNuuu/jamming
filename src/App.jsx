import React, { useState } from 'react'
import appStyles from './styles/App.module.css'
import Spotify from "./Spotify.jsx"
import SearchBar from "./components/SearchBar.jsx"
import TrackList from "./components/TrackList.jsx"
import PlayList from "./components/PlayList.jsx"
function App() {
  const TestSongs = [
    {
      songName: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide"
    },
    {
      songName: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours"
    },
    {
      songName: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia"
    }
  ];

  const [playlist, setPlaylist] = useState(TestSongs);

  const handleRemove = songName => {
    setPlaylist(prevSongs => prevSongs.filter(song => song.songName !== songName));
  };

  const handleAdd = song => {
    setPlaylist(prevSongs => [song, ...prevSongs]);
  };

  const songs = [
    {
      songName: "Shape of You1",
      artist: "Ed Sheeran",
      album: "Divide"
    },
    {
      songName: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours"
    },
    {
      songName: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia"
    }
  ];

  return (
    <>
      <h1>jamming</h1>
      <div className={appStyles.searchArea}><SearchBar /></div>
      <div className={appStyles.main}>
        <div>
          <h2>Results</h2>
          <TrackList handleAdd={handleAdd} songs={songs} />
        </div>
        <div>
          <h2>MyPlayList</h2>
          <PlayList playList={playlist} handleRemove={handleRemove} />
        </div>
      </div>
    </>
  )
}

export default App;
