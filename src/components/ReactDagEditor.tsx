import * as React from "react";

interface ICanvasNode {
  height: number,
  width: number
  x: number,
  y: number,
  label: string,
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

interface ReactDagEditorProps {
  data: ICanvasData;
}

export const ReactDagEditor: React.FunctionComponent<ReactDagEditorProps> = (props) => {
  return (
    <svg width={10000} height={10000}>
      {props.data.nodes.map(node => (
        <g key={node.id}>
          <rect width={node.width} height={node.height} x={node.x} y={node.y} style={{fill:"rgb(0,0,255)",strokeWidth:3, stroke: "rgb(0,0,0)"}} />
          <text x={node.x} y={node.y + node.height / 2} fontSize={20}>{node.label}</text>
        </g>
      ))}
      {props.data.edges.map((edge, index) => {
        const sourceNode = props.data.nodes.find(node => node.id === edge.source);

        if (!sourceNode) {
          throw "invalid source";
        }

        const targetNode = props.data.nodes.find(node => node.id === edge.target);

        if (!targetNode) {
          throw "invalid source";
        }

        return (
          <line key={index} x1={sourceNode.x + sourceNode.width} y1={sourceNode.y + sourceNode.height} x2={targetNode.x} y2={targetNode.y} style={{stroke: "rgb(255,0,0)", strokeWidth:2 }} />
        )
      })}
    </svg>
  );
}
