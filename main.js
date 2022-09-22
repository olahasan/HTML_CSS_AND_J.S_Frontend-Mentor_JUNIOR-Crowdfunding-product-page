let icon = document.getElementById("icon");
let text = document.getElementById("text");
let Bookmark = document.getElementById("Bookmark");
// let one = document.getElementById("one");
// console.log(icon);
// console.log(text);
// console.log(Bookmark);
// console.log(one);


// header
// header
icon.onclick = function(){
    text.classList.toggle("hidden");
} 
Bookmark.onclick = function(){
    Bookmark.classList.toggle("Bookmark");
} 


// button
// button
let back = document.getElementById("back");
let overlay = document.getElementById("overlay");
let backk = document.getElementById("backk");
// console.log(back);
// console.log(overlay);
// console.log(backk);

back.onclick = function(){
    overlay.classList.remove("hidden");
    backk.classList.remove("hidden");
}

// back_this_project

let circle = document.querySelectorAll(".circle");
// console.log(circle);


circle.forEach(function(ele, index){
     ele.onclick = function(){
        // console.log(ele, index);
        circle.forEach(function(e){
            e.style.backgroundColor = "transparent";
        })
        this.style.backgroundColor = "#147b74";
        this.classList.add("red");

if(index === 0){
    // console.log("zero");
}
if(index === 1){

    hr.forEach(function(e, index){
        if(index === 0){
            // console.log(e, index);
            e.classList.remove("hidden");
            uuuuu1.style.display = "flex"
        }
        // console.log(e, index);
    //e.classList.remove("hidden");
    
    Continue.forEach(function(e){
        e.onclick = function(){
            // console.log(this);
            if(this.previousElementSibling.firstElementChild.value >= 25){
                // console.log("full");
                backk.style.zIndex = "0";
                finaly.classList.remove("hidden");
            }else{
                // console.log("nononono");
                this.previousElementSibling.firstElementChild.style.borderColor = "red";
            }
        }
    })

    })
    // console.log("one");
}else{
    hr.forEach(function(e, index){
        if(index === 0){
            // console.log(e, index);
            e.classList.add("hidden");
            uuuuu1.style.display = "none"
        }
    })
}
if(index === 2){
    hr.forEach(function(e, index){
        if(index === 1){
            // console.log(e, index);
            e.classList.remove("hidden");
            uuuuu2.style.display = "flex"
        }
        console.log("lololololi");
    })
    // console.log("last");
}else{
    hr.forEach(function(e, index){
        if(index === 1){
            // console.log(e, index);
            e.classList.add("hidden");
            uuuuu2.style.display = "none"
        }
        // console.log("lololololi");
    })
}
    }
})


// hr
// hr
let hr = document.querySelectorAll(".hr");
// console.log(hr);


// close_tap
// close_tap
let close = document.getElementById("close");
// console.log(close);
close.onclick = function(){
    overlay.classList.add("hidden");
    backk.classList.add("hidden");
}

let uuuuu1 = document.querySelectorAll(".uuuuu")[0];
// console.log(uuuuu1);
let uuuuu2 = document.querySelectorAll(".uuuuu")[1];
// console.log(uuuuu2);
let Continue = document.querySelectorAll(".Continue");
// console.log(Continue);
let finaly = document.getElementById("finaly");
// console.log(finaly);
let done = document.getElementById("done");
// console.log(done);
done.onclick = function(){
    finaly.classList.add("hidden"); 
    backk.classList.add("hidden");
    overlay.style.position = "relative";   
}
