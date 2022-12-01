
/* Date: 30th of November 2022
   Author: Mariam Aoune 
   This file allows interactivity and draws animations for the homepage. 


*/
const typedWord = [ "EMOTIONS."];
 
let letterPos = 0 //pointing at the first letter of the word

function star(){

    //draws and animates stars 

    const numberStars = 250 
    const background = document.querySelector('section')

    for(let i = 0; i < numberStars; i++){
        background.width = window.innerWidth
        background.height = window.innerHeight

        let star = document.createElement('stars') 
     
        //choose a random x position between 0 and the width of the screen 
        let x = Math.floor(Math.random() * window.innerWidth)

        //chooses random y position between 0 and the height of the screen 
        //math.floor will return the nearest integer thatless than the random number 
        let y = Math.floor(Math.random() * window.innerHeight)

        //size of the dot 
        let size  = Math.floor(Math.random() * 8) 

        //positionning star 
        star.style.left = x + "px"
        star.style.top = y + "px"

        //deciding the dimensions of the star
        star.style.width = 1+ size + "px"
        star.style.height = 1 + size + "px"

        if(size % 2 == 0 ){
            //if size is an even number 
            star.style.background = 'black'

        } else {
            star.style.background = 'rgb(224, 186, 16)' 
        }

       //time at which the dot will appear on the screen
        const duration = Math.random() * 1
    
        star.style.animationDuration =  1 + duration + "s"
        
        //star is added to the section tag
        background.appendChild(star)
    }
}

  function typeFirst() {
    //typewriter effect

    // sliced word  
    //is updated eveytime the function is called
    document.querySelector('.typing').innerHTML = typedWord[0].substring(0,letterPos) 
 
    if (letterPos++ != typedWord[0].length){
        //pointer moves to next letter 

        //calls itself every 200ms  
        setTimeout(typeFirst, 200)
    }
    
 
}

function originPage(){
   //removes or adds divs in the homepage

    if(document.getElementById('buttons-hp').value === 'origin'){

        //div for origin page is removed
        document.getElementById('circle').classList.remove('hide'); 
        document.getElementById('origins').classList.remove('hide');

        //the homepage (title, buttons) is added
        document.getElementById('center-hm').classList.add('hide');  
     
       //changes text in button element
        document.getElementById('buttons-hp').value = 'home'

    } else {
        document.getElementById('circle').classList.add('hide');   
        document.getElementById('origins').classList.add('hide');
        document.getElementById('center-hm').classList.remove('hide');   
        document.getElementById('buttons-hp').value = 'origin'
    }

}



star()
setInterval(typeFirst, 1500) //calls function after 1.5 seconds
 