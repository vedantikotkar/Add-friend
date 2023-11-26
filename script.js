let a = document.querySelector("h5");

let btn = document.querySelector("#add");
let count = 0;

btn.addEventListener("click",function(){
    if(count==0){
        a.innerHTML = "Friends"
        a.style.color = "green"
        btn.innerHTML = "Remove"
        count = 1
    }else{
        a.innerHTML = "Stranger"
        a.style.color = "red"
        btn.innerHTML = "Add Friend"
        count = 0
    }
})