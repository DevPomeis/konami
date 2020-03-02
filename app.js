const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyQ", "KeyB"];
let bg = document.body;
let n = 0;
let div = document.querySelector('div');
let button = document.querySelector('a');
document.body.addEventListener( 'keydown', konami);

function konami(event) {
    let percent = document.getElementById('percent');
    if (event.code === konamiCode[n]) {
        n++;
        bg.style.background = "green";
    } else {
        n = 0;
        bg.style.background = "red";
    }
    percent.innerHTML = `${n * 10}`;
    if( n === konamiCode.length){
        div.innerHTML = "GG";
        button.style.display = "block";
        document.body.removeEventListener( 'keydown', konami)
    }
}

document.querySelector('a').addEventListener( 'click', event => {
    event.preventDefault();
    n = 0;
    document.body.addEventListener( 'keydown', konami);
    div.innerHTML = "Enter the konami code<br>"+"<span id='percent'>0</span>%";
    bg.style.background = "black";
    button.style.display = "none";
});