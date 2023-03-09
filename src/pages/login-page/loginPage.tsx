import { loginUrl } from '../../spotify'
import './loginPage.css'
import logo from '../../assets/Spotify_Logo_RGB_Green.png'

export const LoginPage = () => {
    console.log('login page')
    return (
        <div className="login">
            <img
                src={logo}  
                alt="Spotify logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
