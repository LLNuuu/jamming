import React from "react";

function Spotify() {
    const spotifyBaseUrl = "https://accounts.spotify.com";

    const getToken = async () => {
        const spotifyEndpoint = "/api/token";
        const contentType = "application/x-www-form-urlencoded";
        const clientId = "6eb4dc3f650a4845a00a7ad72bdb78bc";
        const clientSecret = "b94fbfc9e378464599ebf29f271bc53d";

        try {

            const response = await fetch(spotifyBaseUrl + spotifyEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": contentType,
                },
                body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
            })
            if(response.ok){
                const jsonObj = await response.json();
                alert(jsonObj["access_token"]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <button onClick={getToken}>Get Token</button>;

}

export default Spotify;