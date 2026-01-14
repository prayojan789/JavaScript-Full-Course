let DATA = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =", DATA);
        
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("Prayojan ", "pprayojan888@gmail.com");
let student2 = new User("Puri","puri888@gmail.com");

let teacher1 = new User("Shradha", "shradha888@gmail.com");

let admin = new Admin("admin", "admin888@gmail.com");