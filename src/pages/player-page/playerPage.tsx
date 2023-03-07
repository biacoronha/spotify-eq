import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PlayerControls } from '../../components/player/playerControls'
import './playerPage.css'
import SpotifyPlayer from 'react-spotify-web-playback';


export const PlayerPage = () => {
    const location = useLocation()
    const { id, token } = location.state

    console.log('token')
    console.log(token)

    const [currentlyPlayingData, setCurrentlyPlayingData] = useState({})

    async function spotifyPlayer() {

       
        // await fetch(`https://api.spotify.com/v1/me/player/play`, {
        //     method: "PUT",
        //     headers: {
        //         'Authorization': 'Bearer ' + token     
        //     },
        //     body: JSON.stringify({
        //         'uris': [`spotify:track:${id}`],
        //         'position_ms': 0
        //     })
        // })
        // .then(result => result.json())
        // .then(data => {
        //     console.log(data)
        //     setCurrentlyPlayingData(data.tracks?.items ?? [])
        // });

    }    

    async function getCurrentlyPlayingData(token: string) {
        await fetch(`https://api.spotify.com/v1/me/player`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token     
            }
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            setCurrentlyPlayingData(data.tracks?.items ?? [])
        });
    }

    useEffect(() => {
        spotifyPlayer()
        getCurrentlyPlayingData(token);
    }, []);

    return (
        <div className='player-page'>
            {/* eq viewer ??? */}
            <SpotifyPlayer
                token={token}
                uris={[`spotify:track:${id}`]}
                hideAttribution
                inlineVolume
                autoPlay
                styles={{
                    activeColor: '#1db954',
                    bgColor: '#191414',
                    color: '#fff',
                    loaderColor: '#fff',
                    sliderColor: '#1db954',
                    sliderHandleColor: '#fff',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                  }}
            />
        </div>


    )
}
