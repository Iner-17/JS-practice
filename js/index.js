function changeBackgroundOnClick(color) {
    return function () {
        document.body.style.backgroundColor = `${color}`;
    };
}

const click1 = changeBackgroundOnClick("red");
const click2 = changeBackgroundOnClick("blue");
const click3 = changeBackgroundOnClick("green");
