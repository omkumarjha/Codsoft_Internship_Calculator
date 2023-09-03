document.getElementById("content").value = ""

let buttons = document.getElementsByClassName("btn")
let string = ""

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let value = e.target.innerHTML;
        if(value == "C"){
            string = "";
            document.getElementById("content").value = string;
        }
        else if(value == "="){
            try{
                string = eval(string);
                document.getElementById("content").value = string;
            }
            catch(e){
                alert(e);
                string = ""
                document.getElementById("content").value = string;
            }
        }
        else{
            string += value;
            document.getElementById("content").value = string;
        }
    })
})