import React, { useEffect, useState } from 'react';
import './App.css';
import { LoginPage } from './pages/login-page/loginPage';
import { SearchPage } from './pages/search-page/searchPage';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
// import { authParameters, tokenEndpoint } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  console.log('entrou aqui no app')


  useEffect(() => {
    console.log('entrou aqui')
      const hash = getTokenFromUrl();
      console.log('hash')
      console.log(hash)
      window.location.hash = "";
      const _token = hash.access_token;
      console.log(_token)

      if (_token) {
        setToken(_token);
        spotify.setAccessToken(_token);
      }

      console.log("token", _token);
      console.log(spotify.getAccessToken())
  }, []);

    
  // useEffect(() => {
  //   if(token) {
  //       fetch(tokenEndpoint, authParameters)
  //     .then(result => result.json())
  //     .then(data => console.log(data))
  //     }
  // }, [token]);

  return (
    <div className="main">
      {token ? <SearchPage token={spotify.getAccessToken()}/> : <LoginPage />}
    </div>
  );
}

export default App;
