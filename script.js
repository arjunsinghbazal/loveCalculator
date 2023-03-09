function Loveper(){
    var name=document.getElementById('name').value;
    var lname=document.getElementById('lname').value;
    if(name==""){
        alert("Please enter your name");
    }else if(name.length<=2){
        alert('Min length is 3');
    }
    else if(!isNaN(name)){
        alert('Number is not allowed');
    }
    if(lname==""){
        alert("Please enter your lname");
    }else if(lname.length<=2){
        alert('Min length is 3');
    }
    else if(!isNaN(lname)){
        alert('Number is not allowed');
    }
    var ldata = Math.random() * 100;
    ldata = Math.floor(ldata);
    document.getElementById('love').value = ldata+"%";
    }