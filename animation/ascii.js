var animation = function () {

    'use strict';

    var splitStr = "=====\n";
    var current = 0;
    var slides = EXERCISE.split("=====\n");
    var limit = slides.length;
    var iObject;


    function nextSlide() {
        if (current < limit - 1) {
            current = current + 1;
            console.log("increased by 1");
        }
        else {
            current = 0;
        }
    };

    function showSlide() {
        var retSlide = slides[current];
        window.document.getElementById("taAnimation").innerHTML = retSlide;
        nextSlide();
    };

    return {
        startAnimation: function (intervalTime) {
            iObject = setInterval(showSlide, intervalTime);
        },

        stopAnimation: function () {
            clearInterval(iObject);
        },

        setAnimation: function (animationType) {
            switch (animationType) {
                case "EXERCISE":
                    slides = EXERCISE.split(splitStr);
                    console.log(slides);
                    break;
                case "JUGGLER":
                    slides = JUGGLER.split(splitStr);
                    console.log(slides);
                    break;
                case "BIKE":
                    slides = BIKE.split(splitStr);
                    console.log(slides);
                    break;
                case "DIVE":
                    slides = DIVE.split(splitStr);
                    break;
                default:
                    slides = EXERCISE.split(splitStr);
            }

            limit = slides.length;
            current = 0;
        }
    }

};

var animationObj;

function initiate() {
    animationObj = animation();

    window.document.getElementById("btnStart").onclick = buttonStart;
    window.document.getElementById("animationType").onchange = animationChange;
    window.document.getElementById("animFontSize").onchange = changeFontSize;
    window.document.getElementById("btnStop").onclick = buttonStop;
}

function buttonStart() {
    if (window.document.getElementById("cbTurbo").checked == true) {
        animationObj.startAnimation(50);
    }
    else {
        animationObj.startAnimation(250);
    }

    window.document.getElementById("btnStart").disabled = true;
    window.document.getElementById("btnStop").disabled = false;
};

function changeFontSize() {
    var newValue = window.document.getElementById("animFontSize").value;
    var fontSize = 12;

    switch (newValue) {
        case "Tiny":
            fontSize = 7;
            break;
        case "Small":
            fontSize = 10;
            break;
        case "Medium":
            fontSize = 12;
            break;
        case "Large":
            fontSize = 16;
            break;
        case "Extra Large":
            fontSize = 24;
            break;
        case "XXL":
            fontSize = 32;
            break;
        default:
            fontSize = 12;
    }
    window.document.getElementById("taAnimation").style.fontSize = fontSize + "pt";
}

function animationChange() {
    animationObj.setAnimation(window.document.getElementById("animationType").value);
}

function buttonStop() {
    animationObj.stopAnimation();
    window.document.getElementById("btnStart").disabled = false;
    window.document.getElementById("btnStop").disabled = true;
}

window.onload = initiate;