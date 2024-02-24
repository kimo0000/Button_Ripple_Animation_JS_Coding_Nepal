const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //    console.log(e.pageX, e.pageY);
    //    console.log(e.target.offsetLeft, e.target.offsetTop);

    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    const rippleEl = document.createElement("span");
    rippleEl.classList.add("ripple");

    rippleEl.style.left = `${x}px`;
    rippleEl.style.top = `${y}px`;

    btn.appendChild(rippleEl);

    setTimeout(() => {
      rippleEl.remove();
    }, 400);
  });
});
