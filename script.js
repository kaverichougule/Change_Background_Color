const colors=["#f6016a","#fa71ad","#8c2c90","#8c2c90","#0069ba","#00aee3","#01a49a","#00a900","#acce01","#ffe500","#fb5d00","#e90001"];
const body= document.querySelector("body");
const button=document.querySelector("button");

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
    document.body.classList.add('change-background-animation');

    setTimeout(() => {
        document.body.classList.remove('change-background-animation');
    }, 500);
})
