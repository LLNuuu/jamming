import React from "react";

const getSpotifyToken = async () => {
    const spotifyBaseUrl = "https://accounts.spotify.com";
    const spotifyEndpoint = "/api/token";
    const contentType = "application/x-www-form-urlencoded";
    const clientId = "your client id here";
    const clientSecret = "your client secret here";

    try {

        const response = await fetch(spotifyBaseUrl + spotifyEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": contentType,
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
        })
        if (response.ok) {
            const jsonObj = await response.json();
            // alert(jsonObj["access_token"]);

            return jsonObj["access_toekn"];
        }
    } catch (error) {
        console.log(error);
    }

}

const getSpotifyTracks = async (token, searchTerms) => {

    const endpoint = 'https://api.spotify.com/v1/search';
    const params = new URLSearchParams({
        q: searchTerms,
        type: "track",
        market: "ES",
        limit: 5,
        offset: 0
    })

    const queryUrl = `${endpoint}?${params.toString()}`;

    const response = await fetch(queryUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })






}

export { getSpotifyToken };