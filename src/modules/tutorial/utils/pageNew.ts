export default function pageNew(index: number) {
  index += 1;
  return {
    title: `Page ${index}`,
    description: `page ${index} description`,
    tasks: [{
      tests: ['./01/01'],
      description: 'first task description',
      hints: [],
      actions: [],
    }]
  };
}
