class Timer{
    constructor(durationInput, startButton, pauseButton,repeatButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.repeatButton = repeatButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        
        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
        this.repeatButton.addEventListener("click", this.repeat);
    }
    isOn = false;
    start = () => {
        if(this.isOn === false){
            if(this.onStart){
                this.onStart(this.timeRemaining);
                this.durationBegining = this.timeRemaining;

                }
            this.tick();
            this.interval = setInterval(this.tick, 20);
            this.isOn = true;
        }else {
            console.error("don't click the button")
        }
    }
    repeat = () => {
        this.pause();
        this.timeRemaining = this.durationBegining;
        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }
        this.isOn = false;
    }

    pause = () => {
        clearInterval(this.interval);
        this.isOn = false;
    }
    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            this.isOn = false;
            if (this.onComplete) {
                this.onComplete(this.training);
            }
        }else {
            this.timeRemaining = this.timeRemaining - .02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}