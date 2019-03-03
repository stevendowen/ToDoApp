let todo = [];
let tasknum = -1;

function displayedTodo(){
    $(".task-box").html("");
    for( i = 0; i < todo.length; i++){
        tasknum++;
        $(".task-box").append("<div class='task'"+ tasknum +">" +
            todo[i] +
            "</div>");
        $(".input").val("");
        $(".input").focus();
    }
}

function addToDo(text){
    let todoTask = $(text).val();
        todo.push(todoTask);
        displayedTodo();
        console.log(todo);
}
