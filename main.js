(function(){
    if(localStorage.allTodos){
        let todos = JSON.parse(localStorage.allTodos);
        for(let l = 0; l < todos.length; l++){
            myTodos.add(todos[l].name);
            for(let t = 0; t < todos[l].tasks.length; t++){
                myTodos.container[l].addTask(todos[l].tasks[t].name);
            }
        }
        displayTodo(myTodos.container);
    }
})();

function addTodo() {
    let myval = $(".input").val();
    if (myval != "") {
        myTodos.add(myval);
        $(".input").val("");
        setTodo();
    }
}
function setTodo(){
    localStorage.setItem("allTodos", JSON.stringify(myTodos.container));
    getTodo();
}

function getTodo(){
    $(".list-box").html("");
    let todoObj = JSON.parse(localStorage.allTodos);
    console.log(todoObj);
    displayTodo(todoObj);
}

function displayTodo(listArray){
    for(let l = 0; l < listArray.length; l++){
        let listtasks = "";
        for(let t = 0; t < listArray[l].tasks.length; t++){
            listtasks += "<div>"+ listArray[l].tasks[t].name +"</div>"
        }
        $(".list-box").append("<div class='demo-card-wide mdl-card mdl-shadow--2dp'>" +
            "<div class='mdl-card__title'>" +
            "<h2 class='mdl-card__title-text'>" + listArray[l].name + "</h2>" +
            "</div>" +
            "<div class='mdl-card__supporting-text'>" +
            "</div>" +
            "<div class='mdl-card__actions mdl-card--border'>" +
            "<input class='input2' type='text' placeholder='Add list' onkeyup='addKey2(this, this.value, event, "+ l +")'/>" +
            "<div class='task-box'>" + listtasks + "</div>" +
            "</div>" +
            "<div class='mdl-card__menu'>" +
            "<input class='checkbox' type='checkbox'/>" +
            "</div>" +
            "</div>");
    }
}

function addKey(inputval, event){
    switch(event.which){
        case 13:
            addTodo(inputval);
            break;
    }
}

function addKey2(element, taskval, event, tasknum){
    switch(event.which){
        case 13:
            let task = $(element).val();
            if(task != "") {
                myTodos.container[tasknum].addTask(taskval);
                setTodo();
                $(element).val("");
                $(".input2").focus();
                break;
            }
    }
}