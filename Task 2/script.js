const inputbox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");
function addTask(){
    if(inputbox.value===''){
        alert('you must write something');
    }else{
        let newTask = document.createElement("li");
        newTask.innerHTML = inputbox.value;
        listcontainer.appendChild(newTask);
        let deleteTask = document.createElement("span");
        deleteTask.innerHTML = "&#10008";
        newTask.appendChild(deleteTask);
    }
    inputbox.value='';
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();
