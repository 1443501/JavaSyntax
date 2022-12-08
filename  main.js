array=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;

    array.push(name1);
    array.push(name2);
    array.push(name3);
    array.push(name4);

    document.getElementById("displayname").innerHTML=array;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}

function sort(){
 array.sort();
 document.getElementById("displayname").innerHTML=array;
}

