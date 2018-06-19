var playSound = function(e){
    var key, audio;
    var keyCode = e.keyCode;
    key = document.querySelector("div[data-key=\"" + keyCode +'"]');
    audio = document.querySelector("audio[data-key=\"" + keyCode +'"]')
    
    key.classList.add("playing");
    audio.play();
}

var removeTransition = function(e){
    if(e.propertyName !== "tranform"){
        e.target.classList.remove("playing");
    }
};

window.addEventListener("keydown",playSound);
var key = Array.from(document.querySelectorAll(".key"));

key.forEach(cur => {
    cur.addEventListener("transitionend", removeTransition);
})

