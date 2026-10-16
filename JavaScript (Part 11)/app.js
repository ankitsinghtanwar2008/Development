function savetoDb(Data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("Success: Data was Saved");
        }else {
            reject("Failure: Due to weak Connection");
        }
    });
}

savetoDb("Name: Ankit Singh")
    .then((result) => {
        console.log("Data Saved");
        console.log("Result of Promises: ", result);
        return savetoDb("Ankit");
    })
    .then((result) => {
        console.log("Data2 Saved");
        console.log("Result of Promises: ", result);
        return savetoDb("Singh");
    })
    .then((result) => {
        console.log("Data3 Saved");
        console.log("Result of Promises: ", result);
        return savetoDb("Tanwar");
    })
    .catch((error) => {
        console.log("Promises was Rejected");
        console.log("Error of Promise: ", error);
    });