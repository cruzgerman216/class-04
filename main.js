// * Variables * 

let mosquitoTrapElem = document.getElementById('mosquito-trap-container')

// * Functions *
function addMosquito(){
  // Step 1: Append the created mosquito to mosquito fly trap container 
  mosquitoTrapElem.appendChild(createMosquito())
}

function createMosquito(){
  // Step 1: Create Element 
  let mosquitoElem = document.createElement('img');
  // Step 2: set attributes
  mosquitoElem.setAttribute('src', './assets/mosquito.jpeg')
  mosquitoElem.setAttribute('width', '10%')

  mosquitoElem.className = "mosquito"
  // Step 3: Randomize the top and left 
  let x = window.innerWidth;
  let y = window.innerHeight; 

  let left = Math.random() * x; 
  let top = Math.random() * y; 

  mosquitoElem.style.top = `${top}px`
  mosquitoElem.style.left = `${left}px`


  // Step 4: Kill mosquito 
  mosquitoElem.addEventListener("click", removeMosquito)
  // Step 5: return the element 
  return mosquitoElem;
}

function removeMosquito(){
  this.remove(); 
}