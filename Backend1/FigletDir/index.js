const figlet = require("figlet");

figlet("Ankit Singh", function (err,data) {
    if(err){
        console.log("Something want Erong");
        console.dir(err);
        return;
    }
    console.log(data);
});