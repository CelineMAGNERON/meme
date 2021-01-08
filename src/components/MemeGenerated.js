import React from "react";

export const MemeGenerated = ({ generatedMemes }) => {

    return generatedMemes.map((meme, i) => {
        return <div key={i}>
            <img src={meme} alt='meme'/>
        </div>
    })
};

MemeGenerated.defaultProps = {
    generatedMemes: []
}

export default MemeGenerated;
