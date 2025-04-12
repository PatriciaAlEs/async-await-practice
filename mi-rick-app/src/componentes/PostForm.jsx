import React, { useState } from "react";

// es el formulario para crear un nuevo post con inputs (entradas controladas)


export const PostForm = ({addPost}) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault(); // para evitar que recargue la pagina
        console.log("este es mi titulo -->: ", title); // me llevo a consola el titulo y el body
        console.log("este es mi body -->: ", body);

        // llamo a la funcion addPost que viene por props de HOME y le paso el nuevo post (title y body) como argumento (que son los mismos que en la api)
        addPost({ 
            title: title,
            body: body,
            userId: 1,
            id: Date.now()
        })

        setTitle(""); // limpio el input del titulo
        setBody(""); // limpio el input del body
    }



    return (


        <>
            <h4 className="mb-3">Esto es el formulario de posts:</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Título:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Introduce aquí el título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Texto del post:</label>
                    <textarea
                        className="form-control"
                        placeholder="Introduce aquí el texto del post"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>

    );
}