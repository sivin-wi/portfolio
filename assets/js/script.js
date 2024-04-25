const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(!(isNaN(form[0].value))){
        form[0].classList.add("border3","border-danger");
        form[0].placeholder="Please enter the name in letters";
    }else if(form[1].value===""){
        form[1].classList.add("border3","border-danger");
        form[1].placeholder="Please enter the email id";
    }else if(form[2].value===""){
        form[2].classList.add("border3","border-danger");
        form[2].placeholder="Please  write something";
    }else{
        if(confirm("Press the button\nEither ok or cancel")){
            form.submit();
            form[0].value= "";
            form[1].value= "";
            form[2].value= "";
            setTimeout(()=>{
                alert("Form Sent");
            },1000)
        } 
    }
})



