export default function updateTask(
  tutorial: Tutorial.Output,
  pagePosition: number, taskPosition: number,
  prop: string, value): Tutorial.Output {

  tutorial.pages[pagePosition].tasks[taskPosition] = tutorial.pages[pagePosition].tasks[taskPosition][prop].concat(value);

  return tutorial;
}
