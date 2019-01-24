class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
       this.contacts.push(info);
    }
    deleteAt(num) {
        this.contacts.splice(num, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
    deleteByName(enterName) {
            this.contacts.splice(this.name, 1);
            console.log(`${enterName} has been removed.`);
        
    }
}
const book = new AddressBook;
while (true) {
    let choice = prompt("Add, Print, Delete, Delete by name, or quit?");
    if (choice.toLowerCase() === "add") {
        const name = prompt("Enter Name: ");
        const email = prompt("Enter Email: ");
        const phone = prompt("Enter Phone: ");
        const relation = prompt("Enter Relation: ");
        book.add(new Contact(name, email, phone, relation));
    } else if (choice.toLowerCase() === "print") {
        book.print();
    } else if (choice.toLowerCase() === "delete") {
        const num = prompt("what is your index?");
        book.deleteAt(num);
    } else if (choice.toLowerCase() === "quit") {
        console.log("bye felicia");
        break;
    } else if (choice.toLowerCase() === "name") {
        const enterName = prompt("What is the name you want to delete?");
        book.deleteByName(enterName);
    }

}


