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