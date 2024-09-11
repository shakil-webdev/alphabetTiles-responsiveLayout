import { useState } from "react";
import SplitPane from "react-split-pane";
// import "./App.css";

function PartitionsMain() {
  const [partitions, setPartitions] = useState([
    { id: 1, color: getRandomColor(), split: "none" },
  ]);

  const splitPartition = (id, splitType) => {
    setPartitions((prevPartitions) => {
      const newPartitions = prevPartitions.map((partition) => {
        if (partition.id === id) {
          const newPartition1 = {
            id: prevPartitions.length + 1,
            color: partition.color,
            split: "none",
          };
          const newPartition2 = {
            id: prevPartitions.length + 2,
            color: getRandomColor(),
            split: "none",
          };
          return {
            ...partition,
            split: splitType,
            children: [newPartition1, newPartition2],
          };
        }
        return partition;
      });
      return newPartitions;
    });
  };

  const removePartition = (id) => {
    if (partitions.length > 1) {
      setPartitions((prevPartitions) =>
        prevPartitions.filter((partition) => partition.id !== id)
      );
    }
  };

  const renderPartition = (partition) => {
    if (partition.split === "none") {
      return (
        <div
          key={partition.id}
          style={{
            backgroundColor: partition.color,
            padding: "10px",
            margin: "5px",
            flexGrow: 1,
          }}
        >
          <button onClick={() => splitPartition(partition.id, "vertical")}>
            V
          </button>
          <button onClick={() => splitPartition(partition.id, "horizontal")}>
            H
          </button>
          <button onClick={() => removePartition(partition.id)}>-</button>
        </div>
      );
    }

    return (
      <SplitPane
        key={partition.id}
        split={partition.split}
        minSize={50}
        defaultSize="50%"
      >
        {renderPartition(partition.children[0])}
        {renderPartition(partition.children[1])}
      </SplitPane>
    );
  };

  return <div>{partitions.map((partition) => renderPartition(partition))}</div>;
}

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export default PartitionsMain;
