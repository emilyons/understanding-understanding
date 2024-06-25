// src/NetworkGraph.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const NetworkGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = {
      nodes: [
        { id: "Understanding Code", group: 0 },
        { id: "Who", group: 1 },
        { id: "What", group: 2 },
        { id: "Where", group: 3 },
        { id: "When", group: 4 },
        { id: "Why", group: 5 },
        { id: "How", group: 6 },
        { id: "What is this?", group: 1 },
        {
          id: "How could we say it out loud in English? (Or, how to represent its meaning in spoken English?)",
          group: 1,
        },
        { id: "Is it standard, common, uncommon, or discouraged?", group: 1 },
        {
          id: "Anywhere else, will it look the same or different somehow?",
          group: 1,
        },
        { id: "Is there a relatable non-dev analogy?", group: 1 },
        {
          id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX",
          group: 1,
        },
        {
          id: "What errors would suggest a problem with this? (What is it not?)",
          group: 1,
        },
        { id: "What would happen if we left it out?", group: 1 },
        { id: "What is this?", group: 2 },
        { id: "What problem is it solving?", group: 2 },
        {
          id: "Does it need to (or will it, or could it) go anywhere else?",
          group: 2,
        },
        { id: "What does it do?", group: 2 },
        { id: "Is it standard, common, uncommon, or discouraged?", group: 2 },
        { id: "Why is it here?", group: 3 },
        { id: "How are things around it dependent on it or not?", group: 3 },
        {
          id: "Does it need to (or will it, or could it) go anywhere else?",
          group: 3,
        },
        {
          id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX",
          group: 3,
        },
        { id: "What would happen if we left it out?", group: 3 },
        { id: "Is it standard, common, uncommon, or discouraged?", group: 4 },
        { id: "How are things around it dependent on it or not?", group: 4 },
        {
          id: "Does it need to (or will it, or could it) go anywhere else?",
          group: 4,
        },
        {
          id: "Anywhere else, will it look the same or different somehow?",
          group: 4,
        },
        {
          id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX",
          group: 4,
        },
        {
          id: "What errors would suggest a problem with this or are related to this?",
          group: 4,
        },
        { id: "Why is it here?", group: 5 },
        { id: "What problem is it solving?", group: 5 },
        { id: "Is there a relatable non-dev analogy?", group: 5 },
        { id: "How are things around it dependent on it or not?", group: 5 },
        {
          id: "Does it need to (or will it, or could it) go anywhere else?",
          group: 5,
        },
        {
          id: "What errors would suggest a problem with this? (What is it not?)",
          group: 5,
        },
        { id: "What would happen if we left it out?", group: 5 },
        {
          id: "Are there other ways to do the same thing? If so, why did we use this method?",
          group: 5,
        },
        {
          id: "Are there other ways to do the same thing? If so, why did we use this method?",
          group: 6,
        },
        { id: "How does it work?", group: 6 },
        { id: "What problem is it solving?", group: 6 },
        { id: "Is there a relatable non-dev analogy?", group: 6 },
        {
          id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX",
          group: 6,
        },
        { id: "Is it standard, common, uncommon, or discouraged?", group: 6 },
        { id: "How are things around it dependent on it or not?", group: 6 },
        {
          id: "What errors would suggest a problem with this? (What is it not?)",
          group: 6,
        },
      ],
      links: [
        { source: "Understanding Code", target: "Who", value: 1 },
        { source: "Understanding Code", target: "What", value: 1 },
        { source: "Understanding Code", target: "Where", value: 1 },
        { source: "Understanding Code", target: "When", value: 1 },
        { source: "Understanding Code", target: "Why", value: 1 },
        { source: "Understanding Code", target: "How", value: 1 },
        { source: 'Who', target: 'What is this?', value: 1 },
  { source: 'Who', target: 'How could we say it out loud in English? (Or, how to represent its meaning in spoken English?)', value: 1 },
{ source: 'Who', target: 'Is it standard, common, uncommon, or discouraged?', value: 1 },
{ source: 'Who', target: 'Anywhere else, will it look the same or different somehow?', value: 1 },
{ source: 'Who', target: 'Is there a relatable non-dev analogy?', value: 1 },
{ source: 'Who', target: 'How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX?', value: 1 },
{ source: 'Who', target: 'What errors would suggest a problem with this? (What is it not?', value: 1 },
{ source: 'Who', target: 'What would happen if we left it out?', value: 1 },
{ source: 'What', target: 'What is this?', value: 1 }, 
{ source: 'What', target: 'What problem is it solving?', value: 1 }, 
{ source: 'What', target: 'Does it need to (or will it, or could it) go anywhere else?', value: 1 }, 
{ source: 'What', target: 'What does it do?', value: 1 }, 
{ source: 'What', target: 'Is it standard, common, uncommon, or discouraged?', value: 1 },
{ source: 'Where', target: 'Why is it here?', value: 1 }, 
{ source: 'Where', target: 'How are things around it dependent on it or not?', value: 1 }, 
{ source: 'Where', target: 'Does it need to (or will it, or could it) go anywhere else?', value: 1 }, 
{ source: 'Where', target: 'How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX', value: 1 }, 
{ source: 'Where', target: 'What would happen if we left it out?', value: 1 },
{ source: 'When', target: 'Is it standard, common, uncommon, or discouraged?', value: 1 },
{ source: 'When', target: 'How are things around it dependent on it or not?', value: 1 },
{ source: 'When', target: 'Does it need to (or will it, or could it) go anywhere else?', value: 1 },
{ source: 'When', target: 'Anywhere else, will it look the same or different somehow?', value: 1 },
{ source: 'When', target: 'How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX', value: 1 },
{ source: 'When', target: 'What errors would suggest a problem with this or are related to this?', value: 1 },
{ source: 'Why', target: 'Why is it here?', value: 1 },
{ source: 'Why', target: 'What problem is it solving?', value: 1 },
{ source: 'Why', target: 'Is there a relatable non-dev analogy?', value: 1 },
{ source: 'Why', target: 'How are things around it dependent on it or not?', value: 1 },
{ source: 'Why', target: 'Does it need to (or will it, or could it) go anywhere else?', value: 1 }
{ source: 'Why', target: 'What would happen if we left it out?', value: 1 },
{ source: 'Why', target: 'Are there other ways to do the same thing? If so, why did we use this method?', value: 1 },
{ source: 'How', target: 'Are there other ways to do the same thing? If so, why did we use this method?', value: 1 },
{ source: 'How', target: 'How does it work?', value: 1 },
{ source: 'How', target: 'What problem is it solving?', value: 1 },
{ source: 'How', target: 'Is there a relatable non-dev analogy?', value: 1 },
{ source: 'How', target: 'How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX', value: 1 },
{ source: 'How', target: 'Is it standard, common, uncommon, or discouraged?', value: 1 },
{ source: 'How', target: 'How are things around it dependent on it or not?', value: 1 },
{ source: 'How', target: 'What errors would suggest a problem with this? (What is it not?)', value: 1 },
      ],
    };

    const svg = d3
      .select(svgRef.current)
      .attr("width", 800)
      .attr("height", 600)
      .style("border", "1px solid black");

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3
          .forceLink(data.links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(400, 300));

    const link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value))
      .attr("stroke", "#999");

    const node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(data.nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", (d) => color(d.group))
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    const text = svg
      .append("g")
      .attr("class", "texts")
      .selectAll("text")
      .data(data.nodes)
      .enter()
      .append("text")
      .attr("dy", -10)
      .attr("dx", 10)
      .style("font-size", "12px")
      .style("fill", "#333")
      .text((d) => d.id);

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid #ccc")
      .style("padding", "10px")
      .style("display", "none");

    node
      .on("mouseover", function (event, d) {
        tooltip
          .style("display", "block")
          .html(`<strong>${d.id}</strong><br/>Group: ${d.group}`)
          .style("left", event.pageX + 5 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function (event, d) {
        tooltip.style("display", "none");
      });

    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", "translate(20,20)");

    const legendData = [
      { label: "Who", color: "red" },
      { label: "What", color: "orange" },
      { label: "Where", color: "yellow" },
      { label: "When", color: "green" },
      { label: "Why", color: "blue" },
      { label: "How", color: "purple" },
    ];

    legendData.forEach((d, i) => {
      legend
        .append("circle")
        .attr("cx", 0)
        .attr("cy", i * 20)
        .attr("r", 6)
        .style("fill", d.color);

      legend
        .append("text")
        .attr("x", 20)
        .attr("y", i * 20)
        .attr("dy", "0.35em")
        .style("text-anchor", "start")
        .text(d.label);
    });

    simulation.nodes(data.nodes).on("tick", ticked);

    simulation.force("link").links(data.links);

    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      text.attr("x", (d) => d.x).attr("y", (d) => d.y);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default NetworkGraph;
