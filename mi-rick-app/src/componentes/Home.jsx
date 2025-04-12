import React, { useState } from "react";
import { PostList } from "./PostList";
import { PostForm } from "./PostForm";

// PostForm y PostList necesitan compartir datos, y como su ancestro común directo es Home, ese es el sitio correcto donde poner el estado.

function Home() {

    const [posts, setPosts] = useState([]); // // Estado para guardar los posts (cargados desde la API o creados con el formulario en PostForm.jsx)

    const addPost = (data) => {
        console.log("este es el nuevo post: ", data); // me llevo a consola el nuevo post
        setPosts([...posts, data]); // actualizo el estado con el nuevo array, todo lo que ya tenia en post (posts), mas los nuevos datos del post creado (data)
    }

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Gestión de Posts 📝</h1>
            <PostForm addPost={addPost}/> {/* importo la funcion para agregar el nuevo post (data) a los que ya tengo (posts)*/}
            <PostList posts={posts}/>
        </div>
    );
}

export default Home;
