import faker from 'faker';
import students from './students.json';

export const getStudents = () => {
  return students.map((student) => ({
    id: faker.random.uuid(),
    score: 0,
    isPresent: true,
    ...student,
  }));
};
