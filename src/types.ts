export interface Node extends d3.SimulationNodeDatum {
    id: string;
    group: number;
  }

export interface Link extends d3.SimulationLinkDatum<Node> {
  source: string;
  target: string;
  value: number;
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}

