function addTask() {

    var input = document.getElementById("taskInput");
    var text = input.value.trim();

    if (text === "") {
        alert("Enter a task");
        return;
    }

    var li = document.createElement("li");
    var time = new Date().toLocaleString();

    li.innerHTML =
        "<b>" + text + "</b><br>" +
        "<span class='small-text'>Added: " + time + "</span><br>";

    // Complete Button
    var completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {

        var completedTime = new Date().toLocaleString();
        li.innerHTML +=
            "<br><span class='small-text'>Completed: " + completedTime + "</span>";

        document.getElementById("completedList").appendChild(li);
        completeBtn.remove();
    };

    // Edit Button
    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
        var newText = prompt("Edit task:", text);
        if (newText !== null && newText.trim() !== "") {
            li.querySelector("b").innerText = newText;
        }
    };

    // Delete Button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("pendingList").appendChild(li);

    input.value = "";
}
