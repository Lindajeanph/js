let activeplayer='x';
let selectedsquares=[];
function placexoro(squarenumber) {
    if(!selectedsquares.some(element => element.includes(squarenumber))) {
        let select= document.getElementById(squarenumber);
        if (activeplayer==='x') {
            select.style.backgroundimage='url("../images/x.png")';
        } else {
            select.style.backgroundimage='url("../images/o.png")';

        }
        selectedsquares.push(squarenumber + activeplayer);
        checkwinconditions();
        if (activeplayer=== 'x') {
            activeplayer='o';
        } else {
            activeplayer='x';
        }
        audio('../media/place.mp3');
        if(activeplayer=== 'o') {
            disableclick();
            setTimeout(function () { computersturn(); }, 1000);
        }
        return true;
        }
        function computersturn() {
            let success=false;
            let pickasquare;
            while(!success) {
                pickasquare= String(math.floor(math.random() * 9));
                if (placexoro(pickasquare)) {
                    placexoro(pickasquare);
                    success=true;
            };
        }
    }
}

function checkwinconditions() {
    if (arrayincludes('0x','1x','2x')) {drawwinline(50, 100, 558,100);}
    else if (arrayincludes('3x','4x','5x')) {drawwinline(50,100,558,100);}
    else if (arrayincludes('6x','7x','8x')) {drawwinline(50,304,558,304);}
    else if (arrayincludes('0x','3x','6x')) {drawwinline(50,508,558,508);}
    else if (arrayincludes('1x','4x','7x')) {drawwinline(100,50,100,558);}
    else if (arrayincludes('2x','5x','8x')) {drawwinline(304,50,304,558);}
    else if (arrayincludes('6x','4x','2x')) {drawwinline(508,50,508,558);}
    else if (arrayincludes('3x','4x','5x')) {drawwinline(100,508,510,90);}
    else if (arrayincludes('0x','4x','8x')) {drawwinline(100,100,520,520);}
    else if (arrayincludes('00','10','20')) {drawwinline(50,100,558,100);}
    else if (arrayincludes('30x','40x','50')) {drawwinline(50,304,558,304);}
    else if (arrayincludes('60x','70','80')) {drawwinline(50,508,558,508);}
    else if (arrayincludes('00','30','60')) {drawwinline(100,50,100,558);}
    else if (arrayincludes('10','40','70')) {drawwinline(304,50,304,558);}
    else if (arrayincludes('20','50','80')) {drawwinline(508,50,508,558);}
    else if (arrayincludes('60','40','20')) {drawwinline(100,508,510,90);}
    else if (arrayincludes('00','40','80')) {drawwinline(100,100,520,520);}
    else if (selectedsquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () {resetgame(); }, 1000);
    }
}

function arrayincludes(squarea,squareb,squarec) {
    const a=selectedsquares.includes(squarea);
    const b= selectedsquares.includes(squareb); 
    const c= selectedsquares.includes(squarec);
    if (a=== true && b === true && c === true) { return true; }
}   

function disableclick() {
    body.style.pointerEvents='none';
    setTimeout(function() {body.style.pointerEvents ='auto';}, 1000);
}

function audio(audiourl) {
    let audio= new audio(audiourl);
    audio.play();
}

function drawwinline(coordx1, coordy1, coordx2, coordy2) {
    const canvas= document.getElementById('win-lines');
    const c = canvas.getcontext('2d');
    let x1= coordx1,
        y1= coordy1
        x2= coordx2,
        y2= coordy2,
        x= x1,
        y= y1;

}

function animatelinedrawing() {
    const animationloop= requestAnimationFrame(animatelinedrawing);
    c.clearrect(0, 0, 608, 608);
    c.beginpath();
    c.moveto(x1, y1);
    c.lineto(x,y);
    c.linewidth= 10;
    c.strokestyle= 'rgba(70, 255, 33, .8)';
    c.stroke();
    if (x1<= x2 && y1 <=y2) {
        if(x< x2) {x+=10; }
        if(y< y2) {y +=10;}
        if(x>= x2 && y>= y2) {cancelAnimationFrame(animationloop); }

    }

    if (x1 <= x2 && y1 >= y2) {
        if(x < x2) {x +=10; }
        if (y > y2) {y-=10; }
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationloop); }

    }
     
}

function clear() {
    const animationloop= requestAnimationFrame(clear);
    c.clearrect(0, 0, 608, 608);
    cancelAnimationFrame(animationloop);
}

function disableclick() {
audio('./media/wingame.mp3');
animatelinedrawing();
setTimeout(function () {clear(); resetgame(); }, 1000);
}

function resetgame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundimage = '';
    }
    selectedsquares= [];
}
