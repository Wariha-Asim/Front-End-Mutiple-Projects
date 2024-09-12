const main = document.querySelector('#main');
const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
const resetbtn = document.querySelector('#reset');
let starttime = 0;
let endtime = 0;
let continuetime = false;
let time = null;

startbtn.addEventListener('click', () => {
    if (continuetime == false) {
        starttime = Date.now() - endtime;
        time = setInterval(update, 10);
        continuetime = true;
    }
});

stopbtn.addEventListener('click', () => {
    if (continuetime) {
        clearInterval(time);
        endtime = Date.now() - starttime;
        continuetime = false;
    }
});

resetbtn.addEventListener('click', () => {
    clearInterval(time);
    starttime = 0;
    endtime = 0;
    continuetime = false;
    main.textContent = '00:00:00:00';
});

const update = () => {
    const currentTime = Date.now();
    endtime = currentTime - starttime;

    let h = Math.floor(endtime / 3600000);
    let m = Math.floor((endtime / 60000) % 60);
    let s = Math.floor((endtime / 1000) % 60);
    let ms = Math.floor((endtime % 1000) / 10);

    h = String(h).padStart(2, '0');
    m = String(m).padStart(2, '0');
    s = String(s).padStart(2, '0');
    ms = String(ms).padStart(2, '0');

   
    main.textContent = `${h}:${m}:${s}:${ms}`;
};
