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
    console.log(myTodos.container);
    localStorage.setItem("allTodos", JSON.stringify(myTodos.container));
    getTodo();
}

function getTodo(){
    $(".list-box").html("");
    let todoObj = JSON.parse(localStorage.allTodos);
    displayTodo(todoObj);
}

function displayTodo(listArray){
    for(let l = 0; l < listArray.length; l++){
        let listtasks = "";

        for(let t = 0; t < listArray[l].tasks.length; t++) {
            let completedclassname = '';
            if(listArray[l].tasks[t].completed == true){
                completedclassname = 'checked';
            }
            listtasks += `<div class="taskitem">
            <span class="${completedclassname}" contenteditable="true" onfocusout="renameTask(this.innerText, ${l}, ${t})">${listArray[l].tasks[t].name}</span>
            <div class="icons">
            <input onclick='markCompleted(this, ${l}, ${t})' type='checkbox' ${completedclassname}/>
            <i class="fas fa-times" onclick="removeTask(this, ${l}, ${t})"></i></div></div>`
            }
        $(".list-box").append(`<div id="cards${l}" class="demo-card-wide mdl-card mdl-shadow--2dp cards">
            <div class='mdl-card__title'>
            <h2 contenteditable='true' onfocusout="renameList(this.innerText, ${l})" class='mdl-card__title-text'>
            ${listArray[l].name}</h2>
            </div>
            <div class='mdl-card__supporting-text'>
            </div>
            <div class='mdl-card__actions mdl-card--border'>
            <input type="text" placeholder="Add list..." onkeyup="addKey2(this, this.value, event, ${l})"/>
            <div>${listtasks}</div>
            </div>
            <div class='mdl-card__menu'>
            <i class="fas fa-times" onclick="removeList(${l})"></i>
            </div>
            </div>`);
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
                break;
            }
    }
}

function markCompleted(element, lIndex,  tIndex) {
    if(element.checked === true) {
        myTodos.container[lIndex].tasks[tIndex].markCompleted();
        $(element).parent(lIndex).parent(tIndex).addClass("completed");
        setTodo();
    }
    else{
        myTodos.container[lIndex].tasks[tIndex].markIncomplete();
        $(element).parent(lIndex).parent(tIndex).removeClass("completed");
        setTodo();
    }
}

function removeList(lIndex){
    myTodos.container.splice(lIndex, 1);
    $(`#cards${lIndex}`).remove();
    setTodo();
}

function removeTask(element, lIndex, tIndex){
        $(element).parent(lIndex).parent(tIndex).slideUp(400, function () {
            myTodos.container[lIndex].tasks.splice(tIndex, 1);
            $(element).parent(lIndex).parent(tIndex).remove();
            setTodo();
    });
}

function renameList(newName, lIndex){
    myTodos.container[lIndex].renameList(newName);
    setTodo();
}

function renameTask(newName, lIndex, tIndex){
    myTodos.container[lIndex].tasks[tIndex].renameTask(newName);
    setTodo();
}