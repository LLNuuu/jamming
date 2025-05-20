import React from "react";

export default function Track({songName, artist, album}){

    return (
        <>
        <p>{songName}</p>
        <p>{artist}</p>
        <p>{album}</p>
        </>
    )
}