class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

{
  // find
  const result = students.find((student, index) => {
    // console.log(student, index);
    return student.score === 90;
  });
  console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90…}
}

{
  // filter
  const result = students.filter((student) => student.enrolled);
  console.log(result); // [Student, Student, Student]
}

{
  // map
  const result = students.map((student) => student.score);
  console.log(result); // [29, 28, 30, 40, 18]
}

{
  // some
  const result = students.some((student) => student.score < 50);
  console.log(result); // true
}

{
  // every
  const result = !students.every((student) => student.score < 50);
  console.log(result); // !false -> true
}

{

}

{
  
}
