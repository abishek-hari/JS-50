import students from "./data.js";

const person = [
  { name: "ana", age: 25, designation: "developer", id: 1, salary: 200 },
  {
    name: "james",
    age: 35,
    designation: "Native developer",
    id: 2,
    salary: 300,
  },
  { name: "cameron", age: 28, designation: "designer", id: 3, salary: 200 },
  { name: "lisa", age: 23, designation: "The boss", id: 4, salary: 500 },
  { name: "sara", age: 23, designation: "The boss", id: 5, salary: 500 },
];

// forEach

person.forEach((people) => {
  console.log(people.name);
});

// map

const ages = person.map((persons) => {
  return persons.age;
});

console.log(ages);

// Filter

const young = person.filter(function (item) {
  return item.age <= 25;
});

console.log(young);

// Find

const peoples = person.find((item) => {
  return item.id === 3;
});
console.log(peoples);

// reduce

const total = person.reduce((acc, curr) => {
  acc += curr.salary;
  return acc;
}, 0);

console.log(total);

// CHALLENGES

// MAP

const updatedStudents = students.map((student) => {
  student.role = "student";
  return student;
});

console.log(updatedStudents);

// FILTER

const highScores = students.filter((student) => {
  return student.scored >= 80;
});
console.log(highScores);

// FIND

const specificId = students.find((id) => {
  return id.id === 1;
});
console.log(specificId);

// REDUCE

const averageScore =
  students.reduce((acc, curr) => {
    acc += curr.scored;
    return acc;
  }, 0) / students.length;
console.log(averageScore);

const survey = students.reduce((survey, student) => {
  const favSubject = student.favSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});
console.log(survey);
