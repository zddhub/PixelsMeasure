const modes = ["object", "guides", "cross", "tolerance"];
const steps = [
  ["workflow-workshop.png", 424],
  ["workflow-workshop-measure.png", 488],
  ["workflow-workshop-annotated.png", 488]
];

export function measurements(rows) {
  return rows.map(([title, body, alt], index) => ({ mode: modes[index], title, body, alt }));
}

export function workflowSteps(rows) {
  return rows.map(([title, body, alt], index) => ({
    title, body, alt, image: steps[index][0], width: 720, height: steps[index][1]
  }));
}
