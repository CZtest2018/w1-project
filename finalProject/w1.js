 function idCard(){
   
   //part1
    var firstName= document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
     var postFullName = firstName +''+ lastName;
     document.getElementById("postFullName").innerHTML = postFullName;
    var address= document.getElementById("address").value;
    document.getElementById("postAddress").innerHTML= address;
   
   
   //part2
    var age = document.getElementById("Age").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    var numberArray = [age, phoneNumber];

    for (var i=0, i<=100, i++)
    {

    }

//document.getElementById("button").addEventListener("click", idCard);

}

