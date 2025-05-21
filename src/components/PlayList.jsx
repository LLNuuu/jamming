import React from "react";
import Track from "./Track";


export default function PlayList({ playList, handleRemove }) {

   const tracks = playList.map(({ songName, artist, album }) => (
      <li key={`${songName}`} >
         <Track songName={songName} artist={artist} album={album} handleType="remove" onClick={handleRemove} />
      </li>));

   return (
      <>
         <ul>
            {tracks}
         </ul>
         <button>SAVE TO SPOTIFY</button>
      </>
   )
}