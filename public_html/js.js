
var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

var c0=document.getElementById('0');
var c1=document.getElementById('1');
var c2=document.getElementById('2');
var c3=document.getElementById('3');

var c4=document.getElementById('4');
var c5=document.getElementById('5');
var c6=document.getElementById('6');
var c7=document.getElementById('7');

var c8=document.getElementById('8');
var c9=document.getElementById('9');
var c10=document.getElementById('10');
var c11=document.getElementById('11');

c0.addEventListener("click",function(){revealCard(0);});
c1.addEventListener("click",function(){revealCard(1);});
c2.addEventListener("click",function(){revealCard(2);});
c3.addEventListener("click",function(){revealCard(3);});

c4.addEventListener("click",function(){revealCard(4);});
c5.addEventListener("click",function(){revealCard(5);});
c6.addEventListener("click",function(){revealCard(6);});
c7.addEventListener("click",function(){revealCard(7);});

c8.addEventListener("click",function(){revealCard(8);});
c9.addEventListener("click",function(){revealCard(9);});
c10.addEventListener("click",function(){revealCard(10);});
c11.addEventListener("click",function(){revealCard(11);});


var firstTime=false;
var turnCounter=0;
var visible_card_nr;
var lock=false;
var pairs=6;
function revealCard(nr){
    var opacityValue=$('#'+nr).css('opacity');
//    alert(opacityValue);
    if(opacityValue!=0 && lock===false){
         var image="url(img/"+cards[nr]+")";
         lock=true;
        $('#'+nr).css('background-image',image);
        $('#'+nr).remove('card');
        $('#'+nr).addClass('cardA');

        if(firstTime===false){
            firstTime=true;
            visible_card_nr=nr;
            lock=false;

        }else{
            if(cards[visible_card_nr]===cards[nr]){
                setTimeout(function(){
                hideCards(nr,visible_card_nr);

                },750);


            }else{
                setTimeout(function(){
                restoreCards(nr,visible_card_nr);

                },1050);
            }
            turnCounter++;
            $('.score').html('Counter: '+turnCounter);
            firstTime=false;


        }
    }  
}


function hideCards(nr1,nr2){
    $('#'+nr1).css('opacity','0');
    $('#'+nr2).css('opacity','0');
    lock=false;
    pairs--;
    if(pairs===0){
        $('.board').html('<h1>You win! Done in'+turnCounter+' turns</h1>');
    }
}

function restoreCards(nr1,nr2){
    $('#'+nr1).css('background-image','url(img/karta.png)');
    $('#'+nr1).remove('cardA');
    $('#'+nr1).addClass('card');
    
    $('#'+nr2).css('background-image','url(img/karta.png)');
    $('#'+nr2).remove('cardA');
    $('#'+nr2).addClass('card');
    lock=false;
}

























