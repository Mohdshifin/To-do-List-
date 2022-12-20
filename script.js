function myFunction(){
    var contents= document.getElementById("content").value;

    if(contents ==""){
        alert("Pls enter any msg!...")
    }
    else{
        let para = document.createElement("div");
        para.classList.add('inp');

        para.id = "paragraph";

        const node = document.createTextNode(contents);


        let remitems =  document.getElementById("paragraph");
        let rembtn = document.createElement("button");


        rembtn.appendChild(document.createTextNode("remove"))
        rembtn.id = "remove";
        rembtn.onclick =  function () {
            para.parentElement.removeChild(para);
        };

        para.appendChild(node);
        document.getElementById("demo").appendChild(para);
        para.appendChild(rembtn);
        document.getElementById("li").appendChild(rembtn);
        
    }

    document.getElementById("btn")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
})
}

function remFun(){
    document.getElementById("demo").innerHTML = "";
}