import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";


export default function SingleCardComponent() {
    const { postID } = useParams(); //si ottiene l id dell url
    const [post, setPost] = useState(null);

    // const { count } = useContext(GlobalContext);



    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/post/${postID}`)
            .then((response) => {
                setPost(response.data);
            });
    }, [postID]);
    if (!post) {
        return (
            <p>non trovato</p>
        )
    }
    return (
        <div>
            <h1>{post.titolo}</h1>
            {post.immagine && (
                <img
                    src={post.immagine}
                    alt={`Immagine di ${post.titolo}`}
                    style={{ maxWidth: '100%' }}
                />
            )}
            <p>{post.contenuto}</p>
            <p>
                <strong>Categoria:</strong> {post.categoria}
            </p>
            <p>
                <strong>Tags:</strong>
                {Object.keys(post.tags)
                    .filter((key) => post.tags[key])
                    .join(', ')}
            </p>
            <p>
                <strong>Email:</strong> {post.email}
            </p>
            <p>
                <strong>Stato:</strong> {post.stato ? 'Pubblicato' : 'Bozza'}
            </p>

        </div>
    );

}