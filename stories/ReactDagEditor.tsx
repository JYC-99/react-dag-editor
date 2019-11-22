import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ReactDagEditor } from "../src";

const generateData = (nodesCount: number) => {
  const nodes = [];
  const edges = [];

  for (let i = 0; i < nodesCount; i++) {
    nodes.push({
      type: "node",
      width: 70,
      height: 70,
      shape: "flow-circle",
      color: "#FA8C16",
      label: `node-${i}`,
      x: 55 + i * 100,
      y: 55 + i * 100,
      id: String(i),
      index: 0,
    });

    if (i > 0) {
      edges.push({
        source: String(i - 1),
        sourceAnchor: 2,
        target: String(i),
        targetAnchor: 0,
        id: String(i),
        index: i,
      });
    }
  }

  return { nodes, edges }
};

storiesOf("ReactDagEditor", module)
  .add("ReactDagEditor", () => {
    return (
      <ReactDagEditor data={generateData(1000)}/>
    );
  });