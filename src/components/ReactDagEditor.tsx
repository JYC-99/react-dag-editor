import * as React from "react";

interface ICanvasNode {
  height: number;
  width: number;
  x: number;
  y: number;
  label: string;
  id: string;
}

interface ICanvasEdge {
  source: string;
  target: string;
}

interface ICanvasData {
  nodes: ICanvasNode[];
  edges: ICanvasEdge[];
}

interface IReactDagEditorProps {
  data: ICanvasData;
}

export const ReactDagEditor: React.FunctionComponent<IReactDagEditorProps> = props => {
  return (
    <svg width={10000} height={10000}>
      {props.data.nodes.map(node => {
        const textY = node.y + node.height / 2;

        return (
          <g key={node.id}>
            <rect
              width={node.width}
              height={node.height}
              x={node.x}
              y={node.y}
              style={{
                fill: "rgb(0,0,255)",
                strokeWidth: 3,
                stroke: "rgb(0,0,0)"
              }}
            />
            <text x={node.x} y={textY + node.x} fontSize={20}>
              {node.label}
            </text>
          </g>
        );
      })}
      {props.data.edges.map((edge, index) => {
        const sourceNode = props.data.nodes.find(
          node => node.id === edge.source
        );

        if (!sourceNode) {
          throw new Error("invalid source");
        }

        const targetNode = props.data.nodes.find(
          node => node.id === edge.target
        );

        if (!targetNode) {
          throw new Error("invalid source");
        }

        const x1 = sourceNode.x + sourceNode.width;
        const y1 = sourceNode.y + sourceNode.height;

        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={targetNode.x}
            y2={targetNode.y}
            style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
          />
        );
      })}
    </svg>
  );
};
