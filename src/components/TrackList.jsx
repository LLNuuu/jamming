import React from "react";
import Track from "./Track";

export default function TrackList({ songs, handleAdd }) {


    const tracks = songs.map(({ songName, artist, album }) => (
        <li key={`${songName}`} >
            <Track songName={songName} artist={artist} album={album} handleType="add" onClick={handleAdd} />
        </li>));

    return (
        <ul>
            {tracks}
        </ul>
    )
}