class Parents {
    constructor(){
        this.lastname = "Swetzer";
        
    }
}





class Child extends Parents{
    constructor (cname){
        super();
        this.name = cname;
    }

    getFullName (){
        return this.name + " " + this.lastname;
    }
}



const baby = new Child("Arnold");
console.log(baby);
const baby2 = new Child("Mina");
console.log(baby2);
console.log(baby.getFullName());