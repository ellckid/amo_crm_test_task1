const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    setInterval(() => {
      let h = Math.floor(seconds / 60 / 60)
      let m = Math.floor(seconds / 60)
      let s = seconds % 60

      seconds--

      if (seconds < 0) {
        timerEl.innerText = 'hh:mm:ss'
      } else {
        timerEl.innerText = h + ":" + m + ':' + s
      }

    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // я бы поменял input type='number'

  inputEl.value = inputEl.value.match(/\d+/)

  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
