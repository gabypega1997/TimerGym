const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const repeatButton = document.querySelector("#repeat");
const circle1 = document.querySelector("#circle1");

const durationInput2 = document.querySelector("#duration2");
const startButton2 = document.querySelector("#start2");
const pauseButton2 = document.querySelector("#pause2");
const repeatButton2 = document.querySelector("#repeat2");
const circle2 = document.querySelector("#circle2");

const perimeter = circle1.getAttribute('r') * 2 * Math.PI;
const perimeter2 = circle2.getAttribute('r') * 2 * Math.PI; 

let duration;
let duration2;
circle1.setAttribute('stroke-dasharray', perimeter);
circle2.setAttribute("stroke-dasharray" , perimeter2);

const timer = new Timer(durationInput, startButton, pauseButton,repeatButton, {
    onStart(totalDuration){
        duration  = totalDuration;
    },
    onTick(timeRemaining){
        circle1.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        );
        
    },
    onComplete(){
        
    }
});

const timer2 = new Timer (durationInput2, startButton2, pauseButton2,repeatButton2,{
    onStart(totalDuration){
        duration2  = totalDuration;
    },
    onTick(timeRemaining){
        circle2.setAttribute('stroke-dashoffset', 
        perimeter2 * timeRemaining / duration2 - perimeter2
        );
        
    },
    onComplete(training){
        console.log("complete");
        if(training === false){
            console.log(training);

            training = true;
            document.querySelector("#start").action = "click";
        }
    }
});
