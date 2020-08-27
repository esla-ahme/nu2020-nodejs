class user {
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
    }
    /*  functions are written without keyword (function)
        functions are public by default, to change it to public add hash before
    */
}

let u = new user("Man10","pass");
console.log(u);
console.log(u.username + " " + u.password);