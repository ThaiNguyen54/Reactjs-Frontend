import React, {Component} from "react";
import {useState, useEffect} from "react";
import axios from "axios";


function WorkExperience () {

    const [animes, setAnimes] = useState([]);
    const GetAnimes = async () => {
        const {animeData} = await axios.get('http://localhost:3001/animes')
        .then(result => {
            setAnimes(result.data.Anime);
            console.log(animes)
        })
        .catch((error) => {
            console.log(error)
        }) || {};
    }

    useEffect(() => {
        GetAnimes()
        console.log(animes)
    }, [])

    return(
        <div className="work section second" id="series">
            <div className="container">
                <h1>My <br/>Favorite Series</h1>
                {animes.map(anime => (
                    <ul className="work-list">
                    <li><b>Name: </b>{anime.Name}</li>
                    <li><b>Type: </b>{anime.Type}</li>
                </ul>
                ))}
            </div>
        </div>
    );
}


export default WorkExperience;