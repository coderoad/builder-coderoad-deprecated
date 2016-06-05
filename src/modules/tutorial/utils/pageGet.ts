import taskGet from './taskGet';

export default function pageGet(index: number) {
  return {
    title: `Page ${index + 1}`,
    description: `page ${index + 1} description`,
    tasks: [taskGet(index, 0)]
  };
}
