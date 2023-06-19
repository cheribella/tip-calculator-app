const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", () => {
    const $body = document.body;
    const $calculator = document.getElementById("tip-calculator");
    const $tipPercent= document.getElementsByClassName("tip-percent-container");
    const $result = document.getElementsByClassName("result");
    const $attribution = document.getElementsByClassName("attribution");
    const $logo = document.getElementById("logo");
    const $icon = document.getElementsByClassName("icon");


    if(toggleSwitch.checked){
        $body.classList.add("night-mode");
        $calculator.classList.add("night-mode");
        $tipPercent[0].classList.add("night-mode");
        $result[0].classList.add("night-mode");
        $attribution[0].classList.add("night-mode")
        $icon[0].classList.add("night-mode");
        $icon[1].classList.add("night-mode");
        $logo.classList.add("night-mode")
    }

    else {
        $body.classList.remove("night-mode");
        $calculator.classList.remove("night-mode");
        $tipPercent[0].classList.remove("night-mode");
        $result[0].classList.remove("night-mode");
        $attribution[0].classList.remove("night-mode")
        $icon[0].classList.remove("night-mode");
        $icon[1].classList.remove("night-mode");
        $logo.classList.remove("night-mode")
    }
})