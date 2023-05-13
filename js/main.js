const navBtn = document.querySelector('.nav-icon-btn')

const navIcon = document.querySelector('.nav-icon')
const headerTop = document.querySelector('.header__top-row')

navBtn.onclick = function(){
  navIcon.classList.toggle('nav-icon--active')
  headerTop.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle('no-scroll')
}


mask('[data-tel-input]');

const checkingInputs = document.querySelectorAll('[data-tel-input]')

checkingInputs.forEach(function(input){
  input.addEventListener('input', function(){
    if(input.value == '+') input.value = ''
  })

  input.addEventListener('blur', function(){
    if(input.value == '+') input.value = ''
  })
})


ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [59.943543, 30.338928],
            zoom: 16
        });

        var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              coordinates: [59.943543, 30.338928] // координаты точки
          }
      });

      myMap.geoObjects.add(myGeoObject);
    }



    // Calculator

const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')
const total = document.querySelector('#total-price')

const radioType = document.querySelectorAll('input[name="type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

const ceilings = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')

const basePrice = 5000

squareRange.addEventListener('input', function(){
  const squareRangeValue = squareRange.value
  squareInput.value = squareRangeValue
  
})

squareInput.addEventListener('input', () =>{
  squareRange.value = squareInput.value
})



function calculate(){
 let totalPrice = basePrice * parseInt(squareInput.value)
 const formatter = new Intl.NumberFormat('ru')
 
 for (const radio of radioType){
  if(radio.checked){
    totalPrice *= parseFloat(radio.value)
  }
 } 

 for (const radio of radioBuilding){
  if(radio.checked){
    totalPrice *= parseFloat(radio.value)
  }
 }

 for(const radio of radioRooms){
  if(radio.checked){
    totalPrice *= parseFloat(radio.value)
  }
 }

if(ceilings.checked){
  totalPrice *= parseFloat(ceilings.value)
}

if(walls.checked){
  totalPrice *= parseFloat(walls.value)
}

if(floor.checked){
  totalPrice *= parseFloat(floor.value) 
}

//  radioCeiling.addEventListener('input', function(){
//   if(radioCeiling.checked){
//     totalPrice *= parseFloat(radioCeiling.value)
//   }
//  })

 total.innerText = formatter.format(totalPrice)
 }

calculate()



for(const input of inputs){
  input.addEventListener('input', function(){
    calculate()
  })
}

// <Calculator />


// Smooth Scroll

const links = document.querySelectorAll('.smooth-scroll')

links.forEach(function(item){
  item.addEventListener('click', function(event){
    event.preventDefault();
    const blockID = event.target.getAttribute('href').substr(1)
    
     document.querySelector('#'+blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
     })
  })
})



// function scrollTo(element){
//   window.scroll({
//     left:0,
//     top: element.offsetTop,
//     behavior: 'smooth',
//   })
// }



// const linkClick = document.querySelectorAll('[data-href]')

// linkClick.forEach(function(item){
//   item.addEventListener('click', function(){
//     const valueDataset = this.dataset.href
    
//     const scrollToBlock = document.querySelectorAll('#'+valueDataset);



//     scrollTo(scrollToBlock)
//   })
// })




// const apartments = document.querySelector('.apartments')
// const apartmentsBlock = document.querySelector('#apartments')

// apartments.addEventListener('click', function(){
//   scrollTo(apartmentsBlock)
// })


// Smooth Scroll /

