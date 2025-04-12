import React from "react";
import OnePost from "./OnePost.jsx"; // importo el componente OnePost para mostrar un post individual
// hace FETCH a la API, guarda datos y mapea los post usando OnePost


export const PostList = ({posts}) => {
    return (
        <>
        <h4>Esto es la lista de posts:</h4>
        {
            posts.map((posts)=>(
                <OnePost
                key={posts.id}
                title={posts.title}
                body={posts.body}
                userId={posts.userId}
                id={posts.id}

                />
            ))
        }
        </>
    );
}