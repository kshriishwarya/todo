document.addEventListener("click",function(e){

if(e.target.classList.contains("edit-me"))
{
    let user_input=prompt("Enter the edited text")
    //console.log(user_input)
    axios.post('/update-item',{text:user_input}).then(function(){

    }).catch(function(){
        console.log("Try again later")
    })
}

})