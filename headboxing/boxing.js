

$(document).ready(function() {

//########################################################### GLOBALS ######################################################
    var headBad = $("#headBad");
    var headBadHit = $("#headBadHit");
    var gloveRightBad = $("#gloveRightBad");
    var gloveLeftBad = $("#gloveLeftBad");
    var gloveLeftMine = $("#gloveLeftMine");
    var inputCanvas = $("#inCanvas");
    var gloveRightMine = $("#gloveRightMine");
    var gloveLeftBadHit = $("#gloveLeftBadHit");
    var myPunchs = $("#myPunchs");
    var pow = $("#pow");
    var wtf = $("#wtf");
    var smash = $("#smash");
    var badPunchs = $("#badPunchs");
    var punch = $("#punch");
    var win = $("#uwin");
    var lost = $("#ulost");
    var timerDiv = $("#timer");
    var timer = 60;
    var gloveRightBadHit = $("#gloveRightBadHit");
    var red = $("#red");
    var red2 = $("#red2");
    var badPoint = 0;
    var myPoint = 0;
    var myHead = $("#myHead");
    var X, Y, Z;
    var htracker = new headtrackr.Tracker({calcAngles: true});
    htracker.init(inputVideo, inputCanvas[0]);
    htracker.start();
    var topGloveLeftMine = posActTop(gloveLeftMine);
    var leftGloveLeftMine = posActLeft(gloveLeftMine);
    var topGloveRightMine = posActTop(gloveRightMine);
    var leftGloveRightMine = posActLeft(gloveRightMine);

//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

//########################################################### EVENTS #######################################################
    $("#starty").click(function() {
        $("#instructions").hide(300);
        startGame();
    });
    $(window).resize(function() {

        topGloveLeftMine = posActTop(gloveLeftMine);
        leftGloveLeftMine = posActLeft(gloveLeftMine);
        topGloveRightMine = posActTop(gloveRightMine);
        leftGloveRightMine = posActLeft(gloveRightMine);
    });
    document.addEventListener("headtrackingEvent", function(event) {
        X = event.x;
        Y = event.y;
        Z = event.z;
        myHeadPosition(myHead);

    });

    $(document).keyup(function(event) {
        event.stopImmediatePropagation();
        if (event.keyCode === 67) {
            punchMine(gloveLeftMine, "left", topGloveLeftMine, leftGloveLeftMine);
        }
        else if (event.keyCode === 77) {
            punchMine(gloveRightMine, "right", topGloveRightMine, leftGloveRightMine);
        }

    });


//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################


//########################################################### FUNCTIONS #######################################################


    function verifyMyGloves(Object, side) {

        if (side === "left") {

            if (posActLeft(Object) > posActLeft(headBad) - 5 && posActTop(Object) < 22) {
                myPoint++;
                changeHead();
                letter();
            }
        } else {
            if (posActLeft(Object) < posActLeft(headBad) + 5 && posActTop(Object) < 22) {
                myPoint++;
                changeHead();
                letter();
            }
        }
        myPunchs.text(myPoint);

    }
    function changeHead() {
        headBad.css("visibility", "hidden");
        headBadHit.css("visibility", "visible");
        setTimeout(function() {
            headBad.css("visibility", "visible");
            headBadHit.css("visibility", "hidden");
        }, 1000);
    }
    function verifyBadGloves(side) {
        if (side === "left") {
            if (posActLeft(myHead) > 5 && posActLeft(myHead) < 30) {
                badPoint++;
                letter();
            }
        } else {
            if (posActLeft(myHead) > 25 && posActLeft(myHead) < 90) {
                badPoint++;
                letter();
            }
        }
        badPunchs.text(badPoint);
    }

    function getRandomSide() {
        num = Math.random() * 100;
        if (num > 50)
            return 'left';
        return 'right';
    }
    function letter() {
        num = Math.round(Math.random() * 3);
        if (num === 1) {
            smash.show(100);
            smash.hide(1000);
        } else if (num === 2) {
            pow.show(100);
            pow.hide(1000);
        } else {
            wtf.show(100);
            wtf.hide(1000);
        }


    }

    function posActLeft(Object) {
        return Math.round((Object.css("left").substring(0, Object.css("left").length - 2) / window.innerWidth) * 100);
    }

    function posActTop(Object) {
        return Math.round((Object.css("top").substring(0, Object.css("top").length - 2) / window.innerHeight) * 100);
    }

    function moveSide(Object, posAct, lengthPercent, time) {
        setTimeout(function() {
            back = (posAct + lengthPercent);
            front = (posAct - lengthPercent);

            side = getRandomSide();
            if (side === "left") {
                Object.animate({
                    left: back.toString() + '%'
                }, time);
                Object.animate({
                    left: posAct.toString() + '%'
                }, time);
            }
            else {
                Object.animate({
                    left: front.toString() + '%'
                }, time);
                Object.animate({
                    left: posAct.toString() + '%'
                }, time);
            }
        }, Math.random() * 1000);
    }

    function moveUpDown(Object, posAct, lengthPercent, time) {
        setTimeout(function() {
            back = (posAct + lengthPercent);
            front = (posAct - lengthPercent);
            Object.animate({
                top: back.toString() + '%'
            }, time);
            Object.animate({
                top: posAct.toString() + '%'
            }, time);


        }, Math.random() * 1000);
    }

    function punchBad(Object, Object2, alert) {
        alert.css("visibility", "visible")

        setTimeout(function() {
            Object.css("visibility", "hidden");
            Object2.css("visibility", "visible");
            alert.css("visibility", "hidden");
        }, 800);
        setTimeout(function() {
            Object.css("visibility", "visible");
            Object2.css("visibility", "hidden");
        }, 1200);

    }

    function punchMine(Object, side, top, left) {
        moveTop2 = "20%";
        if (side === "left") {
            moveLeft2 = "35%";
        } else {
            moveLeft2 = "55%";
        }

        if (posActTop(Object) == 70) {
            Object.stop(true, true).animate({"top": moveTop2, "left": moveLeft2}, 400);
            Object.stop(true, true).animate({"top": top.toString() + "%", "left": left.toString() + "%"}, 400);
            verifyMyGloves(Object, side);
        }
    }

    function myHeadPosition(Object) {
        Object.css("left", Math.round((window.innerWidth / 2) - (Object.width() / 2) + (X * (15))));
    }

    function cargaImg() {
        var img1 = new Image();
        img1.src = 'img/gloveRightBad.png';
        img1.onload = function() {
            cargaContextoCanvas(gloveRightBad[0]).drawImage(img1, 0, 0);
        }
        var img2 = new Image();
        img2.src = 'img/gloveLeftBad.png';
        img2.onload = function() {
            cargaContextoCanvas(gloveLeftBad[0]).drawImage(img2, 0, 0);
        }
        var img3 = new Image();
        img3.src = 'img/gloveLeftMine.png';
        img3.onload = function() {
            cargaContextoCanvas(gloveLeftMine[0]).drawImage(img3, 0, 0);
        }
        var img4 = new Image();
        img4.src = 'img/gloveRightMine.png';
        img4.onload = function() {
            cargaContextoCanvas(gloveRightMine[0]).drawImage(img4, 0, 0);
        }
        imga = new Image();
        imga.src = 'img/gloveRightBadHit.png';
        imga.onload = function() {
            cargaContextoCanvas(gloveRightBadHit[0]).drawImage(imga, 0, 0);
        }
        imgb = new Image();
        imgb.src = 'img/gloveLeftBadHit.png';
        imgb.onload = function() {
            cargaContextoCanvas(gloveLeftBadHit[0]).drawImage(imgb, 0, 0);
        }
        var img6 = new Image();
        img6.src = 'img/youwin.png';
        img6.onload = function() {
            cargaContextoCanvas(win[0]).drawImage(img6, 0, 0);
        }
        var img7 = new Image();
        img7.src = 'img/youlost.png';
        img7.onload = function() {
            cargaContextoCanvas(lost[0]).drawImage(img7, 0, 0);
        }
        var img8 = new Image();
        img8.src = 'img/boxeador.png';
        img8.onload = function() {
            cargaContextoCanvas(myHead[0]).drawImage(img8, 0, 0);
        }
        var img9 = new Image();
        img9.src = 'img/opponent.png';
        img9.onload = function() {
            cargaContextoCanvas(headBad[0]).drawImage(img9, 0, 0);
        }
        var img10 = new Image();
        img10.src = 'img/opponentHit.png';
        img10.onload = function() {
            cargaContextoCanvas(headBadHit[0]).drawImage(img10, 0, 0);
        }
        var img11 = new Image();
        img11.src = 'img/pow.png';
        img11.onload = function() {
            cargaContextoCanvas(pow[0]).drawImage(img11, 0, 0);
        }
        var img12 = new Image();
        img12.src = 'img/smash.png';
        img12.onload = function() {
            cargaContextoCanvas(smash[0]).drawImage(img12, 0, 0);
        }
        var img13 = new Image();
        img13.src = 'img/wtf.png';
        img13.onload = function() {
            cargaContextoCanvas(wtf[0]).drawImage(img13, 0, 0);
        }

    }
    function follow(Object, Follower) {
        Follower.css("left", Object.css("left"));

    }

    function cargaContextoCanvas(elemento) {
        if (elemento && elemento.getContext) {
            var contexto = elemento.getContext('2d');
            if (contexto) {
                return contexto;
            }
        }
        return false;
    }

    function init() {
        punch.hide();
        win.hide();
        lost.hide();
        myHead.css("left", (window.innerWidth / 2) - (myHead.width() / 2));


        gradient = cargaContextoCanvas(red[0]).createRadialGradient(red[0].width / 2, red[0].height / 2, 0, red[0].width / 2, red[0].height / 2, 100);
        gradient.addColorStop(0, '#F00300');
        gradient.addColorStop(1, '#FFF');
        cargaContextoCanvas(red[0]).fillStyle = gradient;
        cargaContextoCanvas(red[0]).fillRect(0, 0, 600, 800);
        cargaContextoCanvas(red2[0]).fillStyle = gradient;
        cargaContextoCanvas(red2[0]).fillRect(0, 0, 600, 800);

        cargaImg();
    }

    function startGame() {

        var Idtimer = setInterval(function() {
            timerDiv.text(timer);
            if (timer > 0) {
                timer--;

            }
            else {
                if (badPoint <= myPoint) {
                    win.show(500);
                    headBad.css("visibility", "hidden");
                    headBadHit.css("visibility", "visible");
                }
                else {
                    lost.show(500);
                }
                clearInterval(Idtimer);
                clearInterval(IdHead);
                clearInterval(IdHeadHit);
            }
        }, 1000);
        time = 0;
        while (time < 56000) {
            time += Math.round(1000 + Math.random() * 4000);
            setTimeout(punchBad, time, gloveLeftBad, gloveLeftBadHit, red);
            setTimeout(verifyBadGloves, time + 800, "left");
        }
        time = 0;
        while (time < 57000) {
            time += Math.round(1000 + Math.random() * 4000);
            setTimeout(punchBad, time, gloveRightBad, gloveRightBadHit, red2);
            setTimeout(verifyBadGloves, time + 800, "right");
        }

        var IdHead = setInterval(moveSide, 1000, headBad, posActLeft(headBad), 10, 200);
        var IdHeadHit = setInterval(follow, 1, headBad, headBadHit);
        setInterval(moveUpDown, 500, gloveLeftBad, posActTop(gloveLeftBad), 5, 200);
        setInterval(moveUpDown, 500, gloveRightBad, posActTop(gloveRightBad), 5, 200);
    }




//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

    init();
    //startGame();

//@TODO Poner las instrucciones, y boton comenzar, al terminar debe salir un cartel de que perdistes o ganastes.






}); 