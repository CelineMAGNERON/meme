import React, { useState, useEffect } from "react";
import { MemeGenerator } from "./components/MemeGenerator";
import { MemeGenerated } from "./components/MemeGenerated";


// Two componants :
// ...
// https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/image
// https://fr.reactjs.org/docs/conditional-rendering.html

function App() {
  const [templates, setTemplates] = useState([]);
  const [results, setResults] = useState([]);

  // connection to API imgflip
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.imgflip.com/get_memes").then((x) => {
        return x.json().then((response) => setTemplates(response.data.memes));
      });
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4" style={{ textAlign: "center" }}>
        Le Meme Generator de l'Espace qui te fait voyager dans l'Absolu
        parce-que l'Absolu c'est Rien et Tout à la fois et qu'on aime la philo
        de l'Essentielle Pauvreté intersidérale. Cela dit je ne dirais pas que
        ce titre qui s'invite lors de cette flanerie profondemment
        intellectuelle est vraiment opportun, après tout est-ce réellement
        nécessaire ou serait-ce par pure mondanité d'un esprit qui chauffe un
        peu trop fort ? Cela questionne les limites d'une éventuelle vanité :
        Mettre ou ne pas mettre est-ce la question ?
      </h1>
      <hr></hr>

      <div className="columns">
        <div className="mt-4 column is-10">
          <div className="columns is-flex-wrap-wrap">
            {templates &&
              templates.map((template) => {
                return (
                  <div key={template.id} className="column is-3 ">
                    <MemeGenerator template={template} setResults={setResults} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="column is-flex is-flex-direction-column">
          <MemeGenerated
          generatedMemes={results}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
