// src/App.js
import { useState } from "react";
import { AlphabetTile } from "./AlphabetTile";

const AlphabetMain = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    let newOutput = outputString + letter;

    let transformedOutput = "";
    let count = 1;

    for (let i = 0; i < newOutput.length; i++) {
      if (newOutput[i] !== "_" && newOutput[i] === newOutput[i + 1]) {
        count++;
      } else {
        if (count === 3) {
          transformedOutput += "_";
        } else {
          transformedOutput += newOutput.substring(i - count + 1, i + 1);
        }
        count = 1;
      }
    }

    setOutputString(transformedOutput);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      <h1>Alphabet Tile Interaction</h1>
      <div>
        {alphabet.map((letter) => (
          <AlphabetTile
            key={letter}
            letter={letter}
            onClick={handleTileClick}
          />
        ))}
      </div>
      <h2>
        Output String: <span>{outputString}</span>
      </h2>
    </div>
  );
};

export default AlphabetMain;
