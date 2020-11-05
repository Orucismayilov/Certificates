function myhello(){
    var person=prompt("Please, enter your name...");
    if (person== ""){
        document.getElementById("mhello").innerHTML="Please,insert your name...";



    }else if(person == "Oruj"){
        document.getElementById("mhello").innerHTML="Welcome back," +person+ ".It's nice to see you";

    }else{
        document.getElementById("mhello").innerHTML="Welcome," +person+ ".If you click on certificate it will appear on another web page.";
    }
}

