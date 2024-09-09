import { GraphData } from "./types";

export const graphData: GraphData = {
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
      id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
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
      id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
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
      id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
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
      id: "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
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
    { source: "Who", target: "What is this?", value: 1 },
    {
      source: "Who",
      target:
        "How could we say it out loud in English? (Or, how to represent its meaning in spoken English?)",
      value: 1,
    },
    {
      source: "Who",
      target: "Is it standard, common, uncommon, or discouraged?",
      value: 1,
    },
    {
      source: "Who",
      target: "Anywhere else, will it look the same or different somehow?",
      value: 1,
    },
    {
      source: "Who",
      target: "Is there a relatable non-dev analogy?",
      value: 1,
    },
    {
      source: "Who",
      target:
        "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
      value: 1,
    },
    {
      source: "Who",
      target:
        "What errors would suggest a problem with this? (What is it not?)",
      value: 1,
    },
    {
      source: "Who",
      target: "What would happen if we left it out?",
      value: 1,
    },
    { source: "What", target: "What is this?", value: 1 },
    { source: "What", target: "What problem is it solving?", value: 1 },
    {
      source: "What",
      target: "Does it need to (or will it, or could it) go anywhere else?",
      value: 1,
    },
    { source: "What", target: "What does it do?", value: 1 },
    {
      source: "What",
      target: "Is it standard, common, uncommon, or discouraged?",
      value: 1,
    },
    { source: "Where", target: "Why is it here?", value: 1 },
    {
      source: "Where",
      target: "How are things around it dependent on it or not?",
      value: 1,
    },
    {
      source: "Where",
      target: "Does it need to (or will it, or could it) go anywhere else?",
      value: 1,
    },
    {
      source: "Where",
      target:
        "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
      value: 1,
    },
    {
      source: "Where",
      target: "What would happen if we left it out?",
      value: 1,
    },
    {
      source: "When",
      target: "Is it standard, common, uncommon, or discouraged?",
      value: 1,
    },
    {
      source: "When",
      target: "How are things around it dependent on it or not?",
      value: 1,
    },
    {
      source: "When",
      target: "Does it need to (or will it, or could it) go anywhere else?",
      value: 1,
    },
    {
      source: "When",
      target: "Anywhere else, will it look the same or different somehow?",
      value: 1,
    },
    {
      source: "When",
      target:
        "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
      value: 1,
    },
    {
      source: "When",
      target:
        "What errors would suggest a problem with this or are related to this?",
      value: 1,
    },
    { source: "Why", target: "Why is it here?", value: 1 },
    { source: "Why", target: "What problem is it solving?", value: 1 },
    {
      source: "Why",
      target: "Is there a relatable non-dev analogy?",
      value: 1,
    },
    {
      source: "Why",
      target: "How are things around it dependent on it or not?",
      value: 1,
    },
    {
      source: "Why",
      target: "Does it need to (or will it, or could it) go anywhere else?",
      value: 1,
    },
    {
      source: "Why",
      target: "What would happen if we left it out?",
      value: 1,
    },
    {
      source: "Why",
      target:
        "Are there other ways to do the same thing? If so, why did we use this method?",
      value: 1,
    },
    {
      source: "How",
      target:
        "Are there other ways to do the same thing? If so, why did we use this method?",
      value: 1,
    },
    { source: "How", target: "How does it work?", value: 1 },
    { source: "How", target: "What problem is it solving?", value: 1 },
    {
      source: "How",
      target: "Is there a relatable non-dev analogy?",
      value: 1,
    },
    {
      source: "How",
      target:
        "How does this interact with related codes & services? (Eg, classes in HTML, CSS, SCSS, JS, JSX)",
      value: 1,
    },
    {
      source: "How",
      target: "Is it standard, common, uncommon, or discouraged?",
      value: 1,
    },
    {
      source: "How",
      target: "How are things around it dependent on it or not?",
      value: 1,
    },
    {
      source: "How",
      target:
        "What errors would suggest a problem with this? (What is it not?)",
      value: 1,
    },
  ],
};
