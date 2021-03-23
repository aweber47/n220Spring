var correctUser = "Username";
var correctPass = "Password";

function logEntry(){
    let userName = document.getElementById("userName").value;
    let passWord = document.getElementById("passWord").value;
    if(userName == correctUser && passWord == correctPass){
        document.write("Success");
    }else{
        document.write("Wrong Information" + " "+ "To try again: please refresh the page [ctrl + r]");
    }
}
