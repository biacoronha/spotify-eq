import { Link } from 'react-router-dom';
import './resultCard.css'

function getArtists(artists: any[]) {
    return artists.map(a => a.name).join(', ')
}

function getCoverImage(album: any) {
    return album.images[0].url;
}


export const ResultCard = ({token, id, album, title, artists}:any) => {
    console.log(id)
    return (
        <Link className="result-card" to={'/player'} state={{id: id, token: token}}>
            <img src={getCoverImage(album)}/>
            <div className='track-info'>
                <p>{title}</p>
                <p>{getArtists(artists)}</p>
            </div>
        </Link>
    )
}
