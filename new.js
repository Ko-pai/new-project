let abc =document.querySelectorAll("#a")


abc.forEach((e)=>{
    // const {reaction,memory,verbal,visual} = e

    
    e.addEventListener("click" ,()=>{
        
        if(e.classList.contains("reactionColor")){
            e.classList.remove("reactionColor")
        }else{
            e.classList.add("reactionColor")
        }
        
    })

})
// reaction.addEventListener("click",()=>{
//     
// })




