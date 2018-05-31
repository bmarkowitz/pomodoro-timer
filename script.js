let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');

const model = {
    interval: 0,
    countdown: function() {

        intSeconds = parseInt(view.currentSeconds);
        intMinutes = parseInt(view.currentMinutes);

        if(intMinutes === 0 && intSeconds === 0) {
            alert('Time is up!');
            controller.restartTimer();
        }
        else if(intSeconds === 0) {
            view.currentSeconds = 59;
            view.currentMinutes -= 1;
            view.updateTimerDisplay();

        }
        else if(view.currentSeconds <= 10) {
            view.currentSeconds -= 1;
            view.currentSeconds = "0" + view.currentSeconds;
            view.updateTimerDisplay();
        }
        else {
            view.currentSeconds -= 1;
            view.updateTimerDisplay();
        }
    },
}

const controller = {
    startTimer: function() {
        if(model.interval) {
            clearInterval(model.interval);
        }
        model.interval = setInterval(model.countdown, 1000);
    },
    pauseTimer: function() {
        clearInterval(model.interval);
    },
    restartTimer: function() {
        view.currentMinutes = "25";
        view.currentSeconds = "00";
        view.updateTimerDisplay();
        this.pauseTimer();
    }
}

const view = {
    currentMinutes: minutes.textContent,
    currentSeconds: seconds.textContent,
    updateTimerDisplay: function() {
        minutes.textContent = this.currentMinutes;
        seconds.textContent = this.currentSeconds;
    },
    setupEventListeners: function() {
        start.addEventListener('click', controller.startTimer);
        pause.addEventListener('click', controller.pauseTimer);
        restart.addEventListener('click', controller.restartTimer.bind(controller)); //using bind to specify desired this value, otherwise this inside restartTimer = the restart button element
    }
};

view.setupEventListeners();