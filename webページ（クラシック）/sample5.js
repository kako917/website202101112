function getMessage(){
    var msg = ['大吉', '中吉', '小吉', '吉', '末吉', '凶']; 
    var num = getRandom();    if(num < 18){ //大吉18%
      idx = 0;
    }else if(num < 27){//中吉9%
      idx = 1;
    }else if(num < 39){//小吉12%
      idx = 2;
    }else if(num < 63){//吉24%
      idx = 3;
    }else if(num < 87){//末吉24%
      idx = 4;
    }else{//凶13%
      idx = 5; 
    }
    var e = document.getElementById("showMessage");
    e.innerHTML= msg[idx]; }

function getRandom(){
    return Math.floor(Math.random() * 100); // 0 ... 99
}
