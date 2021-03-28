let selectedRow = null

// const db = new Localbase('project.db')

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();

    }
}
readFormData()
function readFormData() {
    let toDo=[];
    let formData = {};
    formData["std"] = document.getElementById("std").value;
    formData["emp"] = document.getElementById("emp").value;
    formData["location"] = document.getElementById("location").value;
    formData["date"] = document.getElementById("date").value;
    formData["note"] = document.getElementById("note").value;
    formData["level"] = document.getElementById("level").value;
    formData["pentalty"] = document.getElementById("pentalty").value;
    formData["exampleFormControlFile1"] = document.getElementById("exampleFormControlFile1").value;
    toDo.push(formData)
    localStorage.setItem('toDos', JSON.stringify(formData))
    //  localStorage.toDo = JSON.stringfy(toDo)
    // let alltoDo = JSON.parse(localStorage.toDo)
    return formData;
    
 
}

async function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.std;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.emp;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.location;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.note;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.level;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.pentalty;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.exampleFormControlFile1;

    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a> `;

    cell10 = newRow.insertCell(9);
    cell10.innerHTML = ` <a onClick="onDelete(this)">Delete</a>`;

    cell11 = newRow.insertCell(10);
    cell11.innerHTML = ` <a  onClick="note(this)"><button> Add Notes </button></a>
                      ,  <a  onClick="penalty(this)"><button> Add Penalty </button></a>
                      ,  <a  onClick="attachment(this)"><input type="file"> Add Attachment </a>`;

    await readFormData()

}

function resetForm() {
    document.getElementById("std").value = "";
    document.getElementById("emp").value = "";
    document.getElementById("location").value = "";
    document.getElementById("date").value = "";
    document.getElementById("note").value="";
    document.getElementById("level").value="";
    document.getElementById("pentalty").value="";
    document.getElementById("exampleFormControlFile1").value="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("std").value = selectedRow.cells[0].innerHTML;
    document.getElementById("emp").value = selectedRow.cells[1].innerHTML;
    document.getElementById("location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("note").value = selectedRow.cells[4].innerHTML;
    document.getElementById("level").value = selectedRow.cells[5].innerHTML;
    document.getElementById("pentalty").value = selectedRow.cells[6].innerHTML;
    document.getElementById("exampleFormControlFile1").value = selectedRow.cells[7].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.std;
    selectedRow.cells[1].innerHTML = formData.emp;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.date;
    selectedRow.cells[4].innerHTML = formData.note;
    selectedRow.cells[5].innerHTML = formData.level;
    selectedRow.cells[6].innerHTML = formData.pentalty;
    selectedRow.cells[7].innerHTML = formData.exampleFormControlFile1;


}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function note(td){
    row = td.parentElement.parentElement;
    let newNote = window.open('AddNotes.html')
    newNote.td=td
}

function penalty(td){
    row = td.parentElement.parentElement;
    let newPenalty = window.open('AddPenalty.html')
    newPenalty.td=td
}


function attachment(td){
    row = td.parentElement.parentElement;
    let newAttachment = window.open('AddAttachment.html')
    newAttachment.td=td
}


function validate() {
    isValid = true;
    if (document.getElementById("std").value == "") {
        isValid = false;
        document.getElementById("std").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("std").classList.contains("hide"))
            document.getElementById("std").classList.add("hide");
    }
    return isValid;
}