/* eslint-disable react/prop-types */

export const AlphabetTile = ({ letter, onClick }) => {
  return (
    <button
      onClick={() => onClick(letter)}
      style={{
        border: "1px solid black",
        display: "inline-block",
        padding: "20px",
        margin: "5px",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      {letter}
    </button>
  );
};
