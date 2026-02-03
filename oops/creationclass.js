
class  Student {

    constructor (roll , name)
    {
        this.roll =  roll ;
        this.name = name 
    }

   disply()
   {
       console.log(this.roll , this.name)
   }

}


let student = new Student(1 , "vaibhav") ;  // object  

student.disply() ;

console.log(typeof student.disply) ;