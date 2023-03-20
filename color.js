

const colors=["green","#FFBF00","#6495ED","red","#008000","#800080","grey"];


const btn=document.getElementById('btn');
const span_color=document.querySelector('.color');
const contain=document.querySelector('.container');
btn.addEventListener('click',function()
{
    // get random no b/w 0-4

            const randomNumber=getRandomNo();

            contain.style.backgroundColor=colors[randomNumber];
            span_color.textContent=colors[randomNumber];
        
    
});

    function getRandomNo() 
    {
        
    return Math.floor(Math.random()*colors.length);

    }

