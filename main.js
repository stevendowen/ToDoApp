let todo = retrieveTodo() || [];
let tasknum = 0;
let inputnum = 0;
let listnum = 0;

function addTodo() {
    let myval = $(".input").val();
    tasknum++;
    if (myval != "") {
        $(".task-box").append("<div class='demo-card-wide mdl-card mdl-shadow--2dp'>" +
            "<div class='mdl-card__title'>" +
            "<h2 contenteditable='true' class='mdl-card__title-text'>" + myval + "</h2>" +
            "</div>" +
            "<div class='mdl-card__supporting-text'>" +
            "<i class='fas fa-plus-square' onclick='addInput(" + tasknum + ")'></i>" +
            "<i class='fas fa-minus-square' onclick='deletetask(" + tasknum + ")'></i>" +
            "</div>" +
            "<div class='mdl-card__actions mdl-card--border'>" +
            "<div class='task" + tasknum + "'>" + "</div>" +
            "</div>" +
            "<div class='mdl-card__menu'>" +
            "<input type='checkbox'/>" +
            "</div>" +
            "</div>");
        $(".input").val("");
        $(".input").focus();
        todo.push(myval);
        saveTodo();
        console.log(todo);
    }
}

function addInput(inputid){
    inputnum++;
    $('.task' + inputid).append("<div class='task-input" + inputnum + "'>" +
        "<input class='input1' type='text' placeholder='Add list' onkeyup='addList(" + inputnum + ", this.value, event)'/>" +
        "</div>");
}

function deletetask(taskid){
    $(".task" + taskid).remove();
}

function addList(listid, val, event){
    switch(event.which){
        case 13:
            listnum ++;
            $('.task-input' + listid).append("<div class='list" + listnum + "' contenteditable='true'>" +
                val +
                "</div>");
            $(".input1").val("");
            break;
    }
}

function addKey(val, event){
    switch(event.which){
        case 13:
            addTodo(val);
            break;
    }
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todo));
}

function retrieveTodo(){
    const todosString = localStorage.getItem("todos");
    return JSON.parse(todosString);
}