export class Student {
    constructor(name,email,age){
        this.id =this.getGenerateId;
        this.name = this.name;
        this.email = this.email;
        this.age = this.age;
    }
  getGenerateId(){
      return Math.random().toString(36).substr(2,9);
  }
}