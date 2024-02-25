
// Object Constructor

function User(firstName, lastName, avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new User('Thien', 'Pham', 'Avatar');
var user = new User