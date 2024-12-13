
 const taskInput = document.getElementById('task-input');
 const taskList = document.getElementById('task-list');

 let tasks = [];
 let editMode = null;


function addTask(){
    var taskInput=document.getElementById('task-input');
    var taskInputName= taskInput.value;
    if (taskInputName.length==0){
        return alert('please input a task');
    }
    var tasklistElement=document.createElement('li');
    tasklistElement.innerHTML=taskInputName;

     var taskList=document.getElementById('task-list');
     taskList.appendchild=tasklistElement;
}
 var addTaskButton = document.getElementById('addTask');
 addTaskButton.onclick= addTask;
