let count = 0;

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickButton");
  const counter = document.getElementById("counter");

  button.addEventListener("click", function () {
    count++;
    counter.textContent = count;
  });
});

