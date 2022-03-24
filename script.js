console.log("Script loaded!")
var form1 = document.getElementById("form1")
var nameUser = document.getElementById("nameUser")


const list = new LinkedList();

form1.addEventListener('submit', function(event){
    event.preventDefault();
    list.add(form1.elements['nameUser'].value)
    form1.elements['nameUser'].value = ""

    var content = document.getElementById("secction1");
    content.innerHTML =  list.print();
    console.log(list);
    
})


