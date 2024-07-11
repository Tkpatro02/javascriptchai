const clockval=document.querySelector('#clock')


setInterval(function(){let date=new Date();
    clockval.innerHTML=date.toLocaleTimeString();

    },1000) //first parameter then second parameter

