import React from "react";
import Track from "./Track";

export default function TrackList() {
    const songs = [
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
    const tracks = songs.map(({ songName, artist, album }) => (
        <li key={`${songName}`} >
            <Track songName={songName} artist={artist} album={album} />
        </li>));

    return (
        <ul>
            {tracks}
        </ul>
    )
}