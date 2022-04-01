let section = document.querySelector(".stats");
let stats = document.querySelectorAll(".stats .num");
let started = false;
let section2 = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress .zpan");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      stats.forEach((ele) => {
        let goal = Number(ele.dataset.goal);
        console.log(goal);
        let count = setInterval(() => {
          ele.textContent++;
          if (ele.textContent == goal) {
            clearInterval(count);
          }
        }, 10);
      });
    }
    started = true;
  }
  if (window.scrollY >= section2.offsetTop - 200) {
    console.log("U Reached The Section");
    spans.forEach((span) => {
      span.style.cssText = "transition:2s";
      span.style.width = span.dataset.progress;
    });
  }
};

let countDown = new Date("Dec 31,2022 23:59:59").getTime();
let counter = setInterval(() => {
  //DateTime Now()
  let dateNow = new Date().getTime();
  //Diff between now and the target date
  let dateDifference = countDown - dateNow;

  //time units
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let mins = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDifference % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".mins").innerHTML = mins < 10 ? `0${mins}` : mins;
  document.querySelector(".sec").innerHTML = sec < 10 ? `0${sec}` : sec;
  if (dateDifference == 0) {
    clearInterval(counter);
  }
}, 1000);
