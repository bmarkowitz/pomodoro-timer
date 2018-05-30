let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');

const controller = {
    startTimer: function() {

        setInterval(function() {

            if(view.currentSeconds === 0) {
                view.currentSeconds = 59;
                view.currentMinutes -= 1;
                view.updateTimerDisplay();

            }
            else {
                view.currentSeconds -= 1;
                view.updateTimerDisplay();
            }
        }, 1000);
    },
}

const view = {
    currentMinutes: parseInt(minutes.textContent),
    currentSeconds: parseInt(seconds.textContent),
    updateTimerDisplay: function() {
        minutes.textContent = this.currentMinutes;
        seconds.textContent = this.currentSeconds;
    },
};