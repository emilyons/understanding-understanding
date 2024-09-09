import React, { useRef, useEffect, useMemo, useCallback } from "react";
import * as d3 from "d3";
import { graphData } from "./graphData";
import { Node, Link } from './types';

const NetworkGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const simulation = useMemo(() => {
    return d3
      .forceSimulation(graphData.nodes)
      .force(
        "link",
        d3
          .forceLink(graphData.links)
          .id((d: any) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(400, 300));
  }, []);

  const color = useMemo(() => {
    return d3
    .scaleOrdinal<number, string>()
      .domain([0, 1, 2, 3, 4, 5, 6])
      .range([
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
      ]);
  }, []);

  const dragstarted = useCallback((event: d3.D3DragEvent<SVGCircleElement, Node, any>, d: Node) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = event.x;
    d.fy = event.y;
  }, [simulation]);

  const dragged = useCallback((event: d3.D3DragEvent<SVGCircleElement, Node, any>, d: Node) => {
    d.fx = event.x;
    d.fy = event.y;
  }, []);

  const dragended = useCallback((event: d3.D3DragEvent<SVGCircleElement, Node, any>, d: Node) => {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }, [simulation]);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg
      .attr("width", 800)
      .attr("height", 800)
      .style("border", "1px solid black");

    const link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graphData.links)
      .enter()
      .append("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value))
      .attr("stroke", "#999");

    const node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graphData.nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", (d) => color(d.group))
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .call(
        d3.drag<SVGCircleElement, Node>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    const text = svg
      .append("g")
      .attr("class", "texts")
      .selectAll("text")
      .data(graphData.nodes)
      .enter()
      .append("text")
      .attr("dy", -10)
      .attr("dx", 10)
      .style("font-size", "12px")
      .style("fill", "#333")
      .text((d) => d.id);

    // ... (rest of your D3 code, including tooltip and legend)

    simulation.nodes(graphData.nodes as Node[] & d3.SimulationNodeDatum[]).on("tick", ticked);
    simulation.force<d3.ForceLink<Node, Link>>("link")!.links(graphData.links);

    function ticked() {
      link
        .attr("x1", (d) => (d.source as unknown as Node).x!)
        .attr("y1", (d) => (d.source as unknown as Node).y!)
        .attr("x2", (d) => (d.target as unknown as Node).x!)
        .attr("y2", (d) => (d.target as unknown as Node).y!);
    
      node.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
    
      text.attr("x", (d) => d.x!).attr("y", (d) => d.y!);
    }

  }, [simulation, color, dragstarted, dragged, dragended]);

  return <svg ref={svgRef} aria-label="Network graph visualization"></svg>;
};

export default NetworkGraph;
