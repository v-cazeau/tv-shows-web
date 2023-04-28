import { useState } from "react"

export default function AddShow({ setShows }) {
    const [title, setTitle ] = useState('');
    const [poster, setPoster] = useState('');
    const [seasons, setSeasons] = useState('');
    const [year, setYear ] = useState(''); 

    const handleAddShow = (e) => {
        e.preventDefault();

        fetch("https://tv-shows-api-vc.web.app/shows", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, poster, seasons, year })
        } )
            .then(resp => resp.json())
            .then(data => {
                if(data.message){
                    alert(data.message)
                    return
                }
                setShows(data)
            })
            .catch(alert)
        
    } 

    return (
        <>
        <h2>Add Show</h2>
        <form onSubmit={ handleAddShow }>
            <label htmlFor="title">Title
                <input 
                    type="title"
                    value={title}
                    onChange={ (e) => { setTitle(e.target.value)}} />
            </label>
             <br />
            <label htmlFor="poster">Poster
                <input 
                    type="poster"
                    value={poster}
                    onChange={ (e) => { setPoster(e.target.value)}} />
            </label>
             <br />
            <label htmlFor="seasons">Seasons
                <input 
                    type="seasons"
                    values={seasons}
                    onChange={ (e) => { setSeasons(e.target.value)}} />
            </label>
            <br/>
            <label htmlFor="year">Year
                <input
                    type="year"
                    values={year}
                    onChange={ (e) => { setYear(e.target.value)}} />
            </label>
            <br />
            <input type="submit" value="Add Show" />
        </form>
        </>
    )
}