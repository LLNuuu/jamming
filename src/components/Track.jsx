import React from "react";

export default function Track({ songName, artist, album, handleType, onClick }) {



    return (
        <>
            <p>{songName}
                <br />
                {artist}<span> | </span>{album}
            </p>
            {
                handleType === "remove" ?
                    <button onClick={() => onClick(songName)}>-</button> :
                    <button onClick={() => { onClick({ songName: songName, artist: artist, album: album }) }}>+</button >
            }
        </>
    )
}