let todo = [];

function displayedTodo(){
    $(".task-box").html("");
    for( i = 0; i < todo.length; i++){
        $(".task-box").append("<div>" +
            todo[i] +
            "</div>");
        $(".input").val("");
    }
}

function addToDo(text){
    let todoTask = $(text).val();
        todo.push(todoTask);
        displayedTodo();
        console.log(todo);
}