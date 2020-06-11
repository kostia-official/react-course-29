import faker from 'faker';

export const getStudents = () => [
  { id: faker.random.uuid(), name: 'Александр Друзь', score: 0, isPresent: true },
  { id: faker.random.uuid(), name: 'Борис Бурда', score: 0, isPresent: true },
  { id: faker.random.uuid(), name: 'Джон Реактов', score: 0, isPresent: true },
  { id: faker.random.uuid(), name: 'Майкл Стаб', score: 0, isPresent: true },
];
