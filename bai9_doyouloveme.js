function yesClick(){
    alert("Yes. you are right ");
}
function moveNO(){
    let width = Math.floor(Math.random() * window.innerWidth);
    let height = Math.floor(Math.random() * window.innerHeight);
    document.getElementById('move').style.left = width + 'px';
    document.getElementById('move').style.top = height + 'px';
}
