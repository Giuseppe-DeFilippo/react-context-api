import "./BarraDiNavigazione.css";
import React, { useEffect, useState } from 'react';
import axios from "axios";
export default function BarraDiNavigazione() {

    const [searchTerm, setSearchTerm] = useState("");
    const [posts, setPost] = useState([]);
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            return; //non fa nulla se il campo è vuoto
        }
    }

    //scolgo la chiamata api per i post

    axios
        .get(`http://localhost:3000/api/post/search?query=${searchTerm}`)
        .then((response) => {
            setPost(response.data); //si aggiorna lo ostato con i risultati di ricerca
        })

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="cerca"
                    className="width text-center mt-4 my-4"
                    value={searchTerm} //valore input con stato
                    onChange={handleSearchChange} //aggiorna lo stato
                />



                <input type="button"
                    value="Cerca"
                    className="btn btn-primary"
                    onClick={handleSearch} //funziona ricerca al click
                />
                <div>
                    {posts.length > 0 ? (
                        <ul>
                            {posts.map((post) => (
                                <li key={post._id}>
                                    <h5>{post.titolo}</h5>
                                    <p>{post.contenuto}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nessun risultato trovato.</p>
                    )}
                </div>
            </div>
        </>
    );


}
