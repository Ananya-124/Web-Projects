let newtaskip = document.getElementById("new-task");
let addbtn = document.getElementsByTagName("button")[0];
let incomp = document.getElementById("incompleted");
let comp = document.getElementById("completed");
let createnew = function (taskstring) {
    let listitem  = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let editinput = document.createElement("input");
    let editbtn = document.createElement("button");
    let delbtn = document.createElement("button");
    label.innerText = taskstring;
    editinput.type = "text";
    checkbox.type = "checkbox";
    editbtn.innerText = "Edit";
    delbtn.innerText = "delete";
    
}
