'use strict';

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.timerId = null;
        this.selector = selector;
        this.targetDate = targetDate;
        this.seconds = document.querySelector('[data-value="secs"]');
        this.minutes = document.querySelector('[data-value="mins"]');
        this.hours = document.querySelector('[data-value="hours"]');
        this.days = document.querySelector('[data-value="days"]');

        this.action = this.action.bind(this);
        this.timerId = setInterval(this.action, 1000);
    }

    action() {
        const time = this.targetDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        this.seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        this.minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        this.hours.textContent = hours < 10 ? '0' + hours : hours;
        this.days.textContent = days;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
});

timer.action();