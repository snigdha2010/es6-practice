class Student{
    constructor(sid,sname){
        this.id = sid;
        this.name = sname;

    }

}

const student1 = new Student(12,"mina");
const student2 = new Student(18,"tina");

console.log(student1,student2);
console.log(student2.name);