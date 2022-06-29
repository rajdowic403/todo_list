
const add = () => {
    let tasksadd = document.querySelector("#taskAdd").value;
    
    const task2 = document.querySelector("#tasks");
    
    const task = document.createElement("div");
        
        task.classList.add("task");
        task.innerHTML = tasksadd;

    const deleted = document.createElement("button");
        
        deleted.classList.add("deleted");
        deleted.innerHTML = "X";
        deleted.addEventListener("click", e =>{
        
            task.remove();

        })
    
    


    task.appendChild(deleted);
    task2.appendChild(task);
   
}