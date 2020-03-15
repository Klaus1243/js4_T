var canvas1 = document.getElementById('canvas1');
var ctx = canvas1.getContext('2d');

var backgroundImg = new Image();
backgroundImg.src = "images/background.jpg";

window.onload = function(){
    document.getElementById('play-game1').onclick = function(){
        playGame1();
    };
    function soundClick() {
        var audio = new Audio(); 
        audio.src = "sound/заставка.mp3"; 
        audio.autoplay = true; 
    }
    function playGame1(){
        tom.vx = 5;
        tom.vy = 2;
        jerry.speedX = 15;
        jerry.speedY = 15;
        updateCanvas1();
        
        soundClick();

        setInterval(    
            function(){
                cheese.newProduct();
                cheese.createCheese();
            }, 2000);      
        
        setInterval( function(){
            var random = tom.displayRandomTom();
            tom.createTom(random[0], random[1]);
        }, 10000);
    }

    document.getElementById('play-game2').onclick = function(){
        playGame2();
    };
    function soundClick() {
        var audio = new Audio(); 
        audio.src = "sound/заставка.mp3"; 
        audio.autoplay = true; 
    }
    function playGame2(){
        tom.vx = 10;
        tom.vy = 5;
        updateCanvas1();
        
        soundClick();

        setInterval(    
            function(){
                cheese.newProduct();
                cheese.createCheese();
            }, 2000);      
        
        setInterval( function(){
            var random = tom.displayRandomTom();
            tom.createTom(random[0], random[1]);
        }, 5000);
    }

    document.getElementById('play-game3').onclick = function(){
        playGame3();
    };
    function soundClick() {
        var audio = new Audio(); 
        audio.src = "sound/заставка.mp3"; 
        audio.autoplay = true; 
    }
    function playGame3(){
        tom.vx = 20;
        tom.vy = 10;
        updateCanvas1();

        soundClick();

        setInterval(    
            function(){
                cheese.newProduct();
                cheese.createCheese();
            }, 2000);      
        
        setInterval( function (){
            var random = tom.displayRandomTom();
            tom.createTom(random[0], random[1]);
        }, 3000);
    }


    document.getElementById('play-game4').onclick = function(){
        playGame4();
    };
    function soundClick() {
        var audio = new Audio(); 
        audio.src = "sound/заставка.mp3"; 
        audio.autoplay = true; 
    }
    function playGame4(){
        tom.vx = 5;
        tom.vy = 2;
        jerry.speedX = 15;
        jerry.speedY = 15;
        jerry2.speedX = 15;
        jerry2.speedY = 15;
        updateCanvas2();
        
        soundClick();

        setInterval(    
            function(){
                cheese.newProduct();
                cheese.createCheese();
            }, 2000);      
        
        setInterval( function(){
            var random = tom.displayRandomTom();
            tom.createTom(random[0], random[1]);
        }, 5000);
    }
};





var keysPressed = {
    top: false,
    bottom: false,
    right: false, 
    left: false
};

var keysPressed2 = {
    top2: false,
    bottom2: false,
    right2: false, 
    left2: false
};


var TOP_KEY = 38;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var BOTTOM_KEY = 40;
var TOP2_KEY = 87;
var LEFT2_KEY = 65;
var RIGHT2_KEY = 68;
var BOTTOM2_KEY = 83;

document.onkeydown = function(event){
    event.preventDefault();
    switch (event.keyCode){
        case TOP_KEY:
        keysPressed.top = true;
        break;
        case BOTTOM_KEY:
        keysPressed.bottom = true;  
        break;
        case RIGHT_KEY:
        keysPressed.right = true;
        break;
        case LEFT_KEY:
        keysPressed.left = true;
        break;
        case TOP2_KEY:
        keysPressed2.top2 = true;
        break;
        case BOTTOM2_KEY:
        keysPressed2.bottom2 = true;  
        break;
        case RIGHT2_KEY:
        keysPressed2.right2 = true;
        break;
        case LEFT2_KEY:
        keysPressed2.left2 = true;
        break;
    }
};

document.onkeyup = function(event){
    switch (event.keyCode){
        case TOP_KEY:
        keysPressed.top = false;
        break;
        case BOTTOM_KEY:
        keysPressed.bottom = false;
        break;
        case RIGHT_KEY:
        keysPressed.right = false;
        break;
        case LEFT_KEY:
        keysPressed.left = false;
        break;
        case TOP2_KEY:
        keysPressed2.top2 = false;
        break;
        case BOTTOM2_KEY:
        keysPressed2.bottom2 = false;
        break;
        case RIGHT2_KEY:
        keysPressed2.right2 = false;
        break;
        case LEFT2_KEY:
        keysPressed2.left2 = false;
        break;
    }
};

var stop = false;
var stop2 = false;
function updateCanvas1(){
    Object.keys(keysPressed).forEach(function(edit){
        if(keysPressed[edit]){
            jerry.move(edit);
        }
    });

ctx.drawImage(backgroundImg, 0, 0);

ctx.fillText("Текущие баллы : " + jerry.pointCounter + ' очков', 680 , 20);



jerry.draw();
tom.draw();
tom.move(tom.tomArray);

cheese.draw();

if(jerry.isDead(tom.tomArray)){
    gameOver();
    return;
}

if (stop) {
    return;
    }

for(var i = 0; i < cheese.cheeseArr.length; i++){
    if(cheese.cheeseArr.length !== 0){
        if(jerry.eatCheese(cheese.cheeseArr) === true){
            if(cheese.cheeseArr[i].name === 'normal'){   //Тут тоже неправильно было написано cheese и Arr
                jerry.pointCounter += 50;
            } else if (cheese.cheeseArr[i].name === 'bad'){   //Тут тоже неправильно было написано cheese
                jerry.pointCounter += 100;
                jerry.speedX = 5;
                jerry.speedY = 5;
                setTimeout(function(){
                    jerry.speedX = 10;  //jerry был неправильно написан
                    jerry.speedY = 10;
                }, 2500);
            }
            cheese.cheeseArr.splice(
                cheese.cheeseArr.indexOf(cheese.cheeseArr[i]), 1   //Тут тоже неправильно было написано cheese
            );
        }
    }
}

requestAnimationFrame(updateCanvas1);



};

document.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
        stop = !stop;
         if (!stop) {
            updateCanvas1();
        }
    }
});
document.addEventListener("keydown", function(e) {
    if (e.keyCode === 112) {
        stop2 = !stop2;
         if (!stop2) {
            updateCanvas2();
        }
    }
});

function updateCanvas2(){

    Object.keys(keysPressed).forEach(function(edit){
        if(keysPressed[edit]){
            jerry.move(edit);
        }
    });

    Object.keys(keysPressed2).forEach(function(edit){
        if(keysPressed2[edit]){
            jerry2.move(edit);
        }
    });


ctx.drawImage(backgroundImg, 0, 0);

ctx.fillText("Текущие баллы(Игрок 1) : " + jerry.pointCounter + ' очков', 630 , 20);

ctx.fillText("Текущие баллы(Игрок 2) : " + jerry2.pointCounter + ' очков', 630 , 40);


jerry.draw();
jerry2.draw();
tom.draw();
tom.move(tom.tomArray);

cheese.draw();

if(jerry.isDead(tom.tomArray) || jerry2.isDead(tom.tomArray)){
    gameOver2();
    return;
}

if (stop2) {
    return;
}

for(var i = 0; i < cheese.cheeseArr.length; i++){
    if(cheese.cheeseArr.length !== 0){
        if(jerry.eatCheese(cheese.cheeseArr) === true){
            if(cheese.cheeseArr[i].name === 'normal'){   
                jerry.pointCounter += 50;
            } else if (cheese.cheeseArr[i].name === 'bad'){   
                jerry.pointCounter += 100;
                jerry.speedX = 5;
                jerry.speedY = 5;
                setTimeout(function(){
                    jerry.speedX = 10;  
                    jerry.speedY = 10;
                }, 2500);
            }
            cheese.cheeseArr.splice(
                cheese.cheeseArr.indexOf(cheese.cheeseArr[i]), 1   
            );
        }
        if(jerry2.eatCheese(cheese.cheeseArr) === true){
            if(cheese.cheeseArr[i].name === 'normal'){   
                jerry2.pointCounter += 50;
            } else if (cheese.cheeseArr[i].name === 'bad'){   
                jerry2.pointCounter += 100;
                jerry2.speedX = 5;
                jerry2.speedY = 5;
                setTimeout(function(){
                    jerry2.speedX = 10;  
                    jerry2.speedY = 10;
                }, 2500);
            }
            cheese.cheeseArr.splice(
                cheese.cheeseArr.indexOf(cheese.cheeseArr[i]), 1   
            );
        }
    }
}

requestAnimationFrame(updateCanvas2);

};

// Создание экзмепляров класса
var cheese = new ProductCheese();
var jerry = new Jerry();
var tom  = new Tom();
var jerry2 = new Jerry();


function gameOver(){

    ctx.clearRect(0, 0, canvas1.width, canvas1.height)
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, canvas1.width, canvas1.height)
    ctx.fillStyle = 'black';

    ctx.fillText('Конец игры', canvas1.width / 2 - 100, canvas1.height / 2 -150);
    ctx.fillText('Игрок Jerry набрал ' + jerry.pointCounter, canvas1.width / 2 - 100, canvas1.height / 2 - 50);
    var maxRecord = localStorage.getItem('Record'); 
    if (jerry.pointCounter > maxRecord){   
        localStorage.setItem('Record', jerry.pointCounter);
        ctx.fillText('Максимальный рекорд: ' + jerry.pointCounter, canvas1.width / 2 - 100, canvas1.height / 2 + 50);
    } 
    else {
        ctx.fillText('Максимальный рекорд: ' + maxRecord, canvas1.width / 2 - 100, canvas1.height / 2 + 50);
    }
   
    setInterval(function(){
        location.reload();
    }, 10000)
}

function gameOver2(){

    ctx.clearRect(0, 0, canvas1.width, canvas1.height)
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, canvas1.width, canvas1.height)
    ctx.fillStyle = 'black';

    ctx.fillText('Конец игры', canvas1.width / 2 - 100, canvas1.height / 2 -150);
    ctx.fillText('Игрок 1 набрал ' + jerry.pointCounter, canvas1.width / 2 - 100, canvas1.height / 2 - 80);
    ctx.fillText('Игрок 2 набрал ' + jerry2.pointCounter, canvas1.width / 2 - 100, canvas1.height / 2 - 50);

    var maxRecord = localStorage.getItem('Record'); 
    if (jerry.pointCounter >= maxRecord && jerry.pointCounter >= jerry2.pointCounter){   
        localStorage.setItem('Record', jerry.pointCounter);
        ctx.fillText('Максимальный рекорд: ' + jerry.pointCounter, canvas1.width / 2 - 100, canvas1.height / 2 + 50);
    } else if(jerry2.pointCounter >= maxRecord && jerry2.pointCounter >= jerry.pointCounter){
        localStorage.setItem('Record', jerry2.pointCounter);
        ctx.fillText('Максимальный рекорд: ' + jerry2.pointCounter, canvas1.width / 2 - 100, canvas1.height / 2 + 50);
    }
    else {
        ctx.fillText('Максимальный рекорд: ' + maxRecord, canvas1.width / 2 - 100, canvas1.height / 2 + 50);
    }
   
    setInterval(function(){
        location.reload();
    }, 10000)
}