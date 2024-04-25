const form = document.querySelector("form");

//   regex
const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(form[0].value==="" || !(isNaN(form[0].value))){
        form[0].classList.add("border3","border-danger");
        form[0].placeholder="Enter name in letters";
        alert("Enter name in letters");
    }else if(form[1].value==="" || !(emailPattern.test(form[1].value))){
        form[1].classList.add("border3","border-danger");
        form[1].placeholder="enter correct email id";
        alert("enter correct email id");
    }else if(form[2].value==="" || form[2].value.length >= 25){
        form[2].classList.add("border3","border-danger");
        form[2].placeholder="write something within 25 words";
        alert("write something within 25 words");
    }else{
        if(confirm("Press the button\nEither ok or cancel")){
             alert("Form Sent");
            form.submit();
            form[0].value= "";
            form[1].value= "";
            form[2].value= "";
        } 
    }
})



