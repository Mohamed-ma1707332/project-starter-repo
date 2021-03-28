 const People = [
    { "id":1 ,"Name"  : "Aziz@principle.com","password":"123456","role":"admin" },
    { "id":2 ,"Name"  : "Laith@parent.com","password":"1234","role":"User" },
    { "id":3 ,"Name"  : "Morad@principle.com","password":"1245678","role":"admin" },
    { "id":4 ,"Name"  : "Subhi@parent.com","password":"127456","role":"User" },
 ]

//   console.log(People[0].Name );
//     obj = JSON.stringify(People);
//    console.table(obj)

    


// function getFullName(item) {
//     var fullname = [item.Name,item.Name].join(" ");
//     return fullname;
//   }
// People.map(Login)
// var username=People[0].Name;
// People.map(Login)

function Login () {
    let name =document.getElementById("username").value;
let password =document.getElementById("password").value;
    for(i = 0; i < People.length; i++){
    
    if(name == People[i].Name && password == People[i].password){
        if(People[i].role=='admin'){
            window.open("../HTML/homepage.html")
            break
        } else if(People[i].role=='User') {
            window.open("../HTML/student.html")
            break
        } else {
            alert('Invalid username or password')
        }
  
}
}}



    const Student =  [
        { "id":199 ,"Name"  : "Ahmed", "id-parent":2 },
        { "id":198 ,"Name"  : "Mary", "id-parent":4 },
        { "id":197 ,"Name"  : "Karem",  "id-parent":2},
        { "id":196 ,"Name"  : "Hamza", "id-parent":4}
        ]




