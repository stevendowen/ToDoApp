let myTodos = new ListStorage();

function ListStorage(){
    this.container = [];
    this.add = function(listName){
        this.container.push(new list(listName));
    }
}

class list{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(taskname){
        this.tasks.push(new task(taskname));
    }
    renameList(name){
        this.name = name;
    }
}

class task{
    constructor(name){
        this.name = name;
        this.completed = false;
    }
    markCompleted(){
        this.completed = true;
    }
    markIncomplete(){
        this.completed = false;
    }
    renameTask(name){
        this.name = name;
    }
}