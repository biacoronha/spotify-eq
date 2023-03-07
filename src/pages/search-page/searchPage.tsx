import { useEffect, useState } from "react"
import { ResultCard } from "../../components/result-card/resultCard"
import './searchPage.css'

export const SearchPage = ({token}: any) => {
    const [searchItem, setSearchItem] = useState('')
    const [searchResults, setSearchResults] = useState([])
    console.log(token)

    useEffect(() => {
        spotifySearch(searchItem);
    }, [searchItem]);

    async function spotifySearch(value: string) {
        console.log("Search Item: " + value)
        console.log(token)
        const fetchURL = encodeURI(value)
        //use token url
        //then search using the auth token as headers
        await fetch(`https://api.spotify.com/v1/search?type=track&limit=5&offset=0&q=${fetchURL}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token     
            }
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            setSearchResults(data.tracks?.items ?? [])
            console.log(searchResults)
        });
}

    return (
        <div className="search">
            <div className="search-bar">
                <input
                    placeholder="Search for Songs"
                    type="search"
                    onChange={e => setSearchItem(e.target.value)}
                    onBlur={e => {
                        e.target.value = ''
                        setSearchItem(e.target.value)
                        }} />
                <div className="search-icon"></div>
            </div>
            <div className="results">
                {searchResults?.map((result: any, i) => {
                    console.log(result)
                    return (
                        <ResultCard
                        token={token}
                         key={result.id}
                         id={result.id}
                         album={result.album}
                         title={result.name}
                         artists={result.artists}
                         />
                    )
                })}

            </div>
        </div>
        
    )
}