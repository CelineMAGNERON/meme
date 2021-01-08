import React, { useState } from "react";
import { PASSWORD, USERNAME } from "../constantes/constant";

export const MemeGenerator = ({ template, setResults }) => {

  const [setId] = useState(null);

  const [textTop, setTextTop] = useState("");

  const [textBottom, setTextBottom] = useState("");
  
  const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

  return (
    <>
      <img
        style={{ width: 200 }}
        key={template.id}
        src={template.url}
        alt={template.name}
        onClick={() => {
          setId(template.id);
        }}
      />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // créé un meme depuis l'API
          const params = {
            template_id: template.id,
            text0: textTop,
            text1: textBottom,
            username: USERNAME,
            password: PASSWORD,
          };
          const response = await fetch(
            `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`
          ).then(x => x.json());
          // charge le nouveau meme dans setResults pour être appelé dans le parent
          setResults(prevState => {
            console.log(prevState)
            return [...prevState, response.data.url]
          })
        }}
      >
        <label>
          <input
            className="column is-flex is-full"
            placeholder="Text du haut"
            type="text"
            value={textTop}
            onChange={(e) => setTextTop(e.target.value)}
          />
          <input
            className="column is-flex is-full"
            placeholder="Text du bas"
            type="text"
            value={textBottom}
            onChange={(e) => setTextBottom(e.target.value)}
          />
        </label>
        <button className="column" type="submit">
          Créer
        </button>
      </form>
    </>
  );
};

export default MemeGenerator;
