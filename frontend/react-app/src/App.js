import { useEffect, useState } from "react";

function App() {
    const [variable, setVariable] = useState("");

    useEffect(()=> {
        /*fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => response.json())
            .then((json) => setVariable(json[0].url))
            .catch((error) => console.log(error));*/

        fetch("http://127.0.0.1:8080/productos",{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
                /*"Origin": "http://localhost:3000"*/
            }
        })
            .then((response) => response.json())
            .then((json) => setVariable(json.caducidad))
            .catch((error) => console.log(error));
    },[])

    return (
        <> {/*React.Fragment*/}
            <h1> It just works </h1>
            <p> Voy a consultar una API: </p>
            { variable!='' && <h2> Mi respuesta es: {variable}</h2> }
            <img src={variable}/>
        </>
    );
}

export default App;
