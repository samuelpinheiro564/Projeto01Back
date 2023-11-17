
 
export class StudentsList {
    constructor(){
this.students = [];
    }
    addStudent(student){
        this.students.push(student);
    }
  updateStudents(id,student){
const index=this.students.
findIndex((student)=>student.id === student.id);
this.students[index]=student;
  }
  removeStudent(id){
      this.students=this.students.
      filter((student)=>student.id !== id);
  }
}