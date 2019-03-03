let todo = [];
let tasknum = 0;
let inputnum = 0;
let listnum = 0;

function addTodo(val, event){
    switch(event.which) {
        case 13:
            tasknum++;
            if (val != "") {
                $(".task-box").append("<div class='task" + tasknum + "'>" +
                    val +
                    "<i class='fas fa-plus-square' onclick='addInput(" + tasknum + ")'></i>" +
                    "<i class='fas fa-minus-square' onclick='deletetask(" + tasknum + ")'></i>" +
                    "</div>");
                $(".input").val("");
                $(".input").focus();
                todo.push(val);
                console.log(todo);
                break;
            }
    }
}

function addInput(inputid){
    inputnum ++;
    $('.task' + inputid).append("<div class='task-input" + inputnum + "'>" +
        "<input type='text' placeholder='Add list' onkeyup='addList("+ listnum +", this.value, event)'/>" +
        "</div>");
}

function deletetask(taskid){
    $(".task" + taskid).remove();
}

function addList(listid, val, event){
    switch(event.which){
        case 13:
            listnum ++;
            $('.task' + listid).append("<div class='list" + listnum + "'>" +
                val +
                "</div>");
            break;
    }
}
