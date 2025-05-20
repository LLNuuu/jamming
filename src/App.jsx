import { useState } from 'react'
import './App.css'
import Spotify from "./Spotify.jsx"
import SearchBar from "./components/SearchBar.jsx"
import SearchButton from "./components/SearchButton.jsx"
import TrackList from "./components/TrackList.jsx"
import SaveToSpotifyButton from "./components/SaveToSpotifyButton.jsx"
import PlayList from "./components/PlayList.jsx"
function App() {
  const [count, setCount] = useState(0);



  return (
    <>
     <h1>jamming</h1> 
     <SearchBar/>
    <div>
      <h2>Results</h2>
      <TrackList/>
    </div>
    <div>
      <h2>MyPlayList</h2>
      <PlayList/>
    </div>
    </>
  )
}

export default App
