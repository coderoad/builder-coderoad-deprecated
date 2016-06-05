export default function updateTask(
  tutorial: CR.Tutorial,
  pagePosition: number, taskPosition: number,
  prop: string, value): CR.Tutorial {
  tutorial.pages[pagePosition].tasks[taskPosition] = tutorial.pages[pagePosition].tasks[taskPosition][prop].concat(value);
  return tutorial;
}
