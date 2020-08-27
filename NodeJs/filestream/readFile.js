var fileSystem = require("fs"); // imporing file system package to use it withen our module/code
/*without "utf-8" parameter message is printed as array of ascii code 
*/
fileSystem.readFile('files.txt',"utf-8",(error,data) =>{ 
    if(!error){
        console.log(data);
        }
    else {
        console.log(error);    
    }
});

// write to file example
var data = "Hello NodeJs"
fileSystem.writeFile("temp.txt",data,(error)=> {
    if(error) console.log(error);
    console.log("succeeded");
});