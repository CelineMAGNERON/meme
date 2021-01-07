import React, { useState, useEffect } from "react";

// Two componants :
// ...

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
       <h1 className="mt-4" style={{ textAlign: "center" }}>Le Meme Generator de l'Espace</h1>
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
