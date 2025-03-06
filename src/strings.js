const student1 = {
  name: 'Sarah',
  course: 'Javascript',
  grade: 95,
}
const student2 = {
  name: 'John',
  course: 'Python',
  grade: 88,
}
const student3 = {
  name: 'Alice',
  course: 'C++',
  grade: 92,
}
function displayStudentInfo(name, corse, grade) {
  return `${name} is taking ${course} and expects to earn ${grade}%`
}
console.log(displayStudentInfo('Sarah', 'Javascript', 95))
console.log(displayStudentInfo('John', 'Python', 88))
console.log(displayStudentInfo('Alice', 'C++', 92))
