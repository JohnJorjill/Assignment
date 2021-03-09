function bigger(){
    setInterval(function(){makeBig()}, 500);
}

function bolder(){
    document.body.style.background = "url('https://wallpapercave.com/wp/wp2754864.jpg') no-repeat right top";
    if(document.getElementById("ta").style.fontWeight=='bold'){
        document.getElementById("ta").style.fontWeight = 'normal';
        document.getElementById("ta").style.color = 'black';
        document.getElementById("ta").style.textDecoration = 'none';
    }else{
        document.getElementById("ta").style.fontWeight = 'bold';
        document.getElementById("ta").style.color = 'green';
        document.getElementById("ta").style.textDecoration = 'underline';
    }
}


function makeBig(){
    let fs = window.getComputedStyle(document.getElementById('ta')).fontSize;
    let size = parseInt(fs)+2;
    document.getElementById("ta").style.fontSize = size+'pt';
}

function igpay(){
    let text = document.getElementById("ta").value;
    let words = text.split(" ");
    for(let i=0;i<words.length;i++){
        if(words[i].length >= 5){
            words[i] = "Malkovich";
        }
    }
    let newText = words.join(" ");
    document.getElementById("ta").value = newText;
}

function malkovich(){
    let text = document.getElementById("ta").value;
    let words = text.split(" ");
    for(let i=0;i<words.length;i++){
        if(words[i].length >= 5){
            words[i] = "Malkovich";
        }
    }
    let newText = words.join(" ");
    document.getElementById("ta").value = newText;
}