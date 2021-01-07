import React, { useState, useEffect } from "react";

// Two componants :
// ...
// https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/image
// https://fr.reactjs.org/docs/conditional-rendering.html

function App() {

  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  // connection to API imgflip
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setTemplates(response.data.memes))
    );
  }, []);

  return (
    <div className="container">
       <h1 className="mt-4" style={{ textAlign: "center" }}>Le Meme Generator de l'Espace qui te fait voyager dans l'Absolu parce-que l'Absolu c'est Rien et Tout à la fois et qu'on aime la philo de l'Essentielle Pauvreté intersidérale. 
       Cela dit je ne dirais pas que ce titre qui s'invite lors de cette flanerie profondemment intellectuelle est vraiment opportun, après tout est-ce réellement nécessaire ou serait-ce par pure mondanité d'un esprit qui chauffe un peu trop fort ? Cela questionne les limites d'une éventuelle vanité : Mettre ou ne pas mettre est-ce la question ?</h1>
       <hr></hr>

      <div className="columns">
       
        <div className="mt-4 column is-10">
        <div className="columns is-flex-wrap-wrap"> 
        {!template &&
            templates.map((template) => {
              return (
                <div className="column is-3 ">
                  <img
                    style={{ width: 200 }}
                    key={template.id}
                    src={template.url}
                    alt={template.name}
                    onClick={() => {
                      // setId(template.id)
                    }}
                  />
                </div>
              );
            })}

        </div>
        
        </div>
        <div className="column is-flex">Coucou</div>
      </div>
    </div>
  );
}



export default App;
