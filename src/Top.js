import React from "react";


export default function Top() {

    const inicialImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const [name, setName] = React.useState("");
    const [avatar, setAvatar] = React.useState(inicialImage);
    
   

    function changeName() {
        const textName = prompt("Enter your name");
        setName(textName);
    }

    function changeImg () { 
        let textImage = prompt("Enter your image");
        setAvatar(textImage);
     }

    return (
        <div class="top">
            <h1>Mooflix</h1>

                <div className="top-right">
                    <button onClick={changeName}>Enter name</button>
                    <p>{!name ? "Welcome to the website!" : `Welcome ${name}!`}</p>
                    <img onClick={changeImg} src= {avatar}></img>
                </div>
        </div>
    );
}

