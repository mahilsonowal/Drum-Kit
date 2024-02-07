// let keyPressed = false;

for(let i=0; i<document.querySelectorAll(".drum").length; i++)  {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // if (!keyPressed) {
            playSound(this.innerHTML);
        // }  
    });

}

    document.addEventListener("keydown", function(event) {
        // keyPressed = true;
        const key = event.key.toLowerCase();
        if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
            event.preventDefault();
            playSound(key);
            console.log(key);
        }
    });


    // document.addEventListener("keyup", function() {
    //     keyPressed = false;
    // });

        function playSound(key) {
            switch (key) {
                case "w":
                    new Audio("tom-1.mp3").play();
                break;
    
                case "a":
                    new Audio("tom-2.mp3").play();
                break;
    
                case "s":
                    new Audio("tom-3.mp3").play();
                break;
    
                case "d":
                    new Audio("tom-4.mp3").play();
                break;
    
                case "j":
                    new Audio("snare.mp3").play();
                break;
    
                case "k":
                    new Audio("crash.mp3").play();
                break;
    
                case "l":
                    new Audio("kick-bass.mp3").play();
                break;
    
    
                default:   alert("Wrong Button!");
        }

        
        }
    



