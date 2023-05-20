
; (function () {


  //定義區
  let wrap = document.querySelector('.wrap');

  let fruit = document.querySelector('.fruit');
  let fruitImg = document.querySelector('.fruit img');
  let cans = document.querySelector('.cans');
  let cansImg = document.querySelector('.cans img');

  let drinktext = document.querySelector('.drinktext');

  let wheelDelta = 0;
  let wheelDeltaTimes = 0;

  //----------------------------------------------
  //函式區
  function removeRE() {
    fruit.classList.remove('fruitanimationRE');
    fruit.classList.add('fruitanimation');
    drinktext.classList.remove('textanimationRE');
    drinktext.classList.add('textanimation');
  };

  function addRE() {
    fruit.classList.add('fruitanimationRE');
    fruit.classList.remove('fruitanimation');
    drinktext.classList.remove('textanimation');
    drinktext.classList.add('textanimationRE');
  };




  //----------------------------------------------
  //事件區

  window.addEventListener('wheel', function (e) {
    // console.log(e.deltaY);
    let wheelDeltaY = Math.trunc(Number(e.deltaY))
    wheelDelta += wheelDeltaY;
    wheelDeltaTimes = wheelDelta / Math.abs(wheelDeltaY);
    console.log(wheelDelta);
    console.log(wheelDeltaTimes);

    switch (true) {
      case (wheelDeltaTimes == 1):
        addRE()
        setTimeout(function () {
          removeRE()
          fruitImg.src = './IMG/kiwi001.png';
          cansImg.src = './IMG/soda-green.png';
          drinktext.innerHTML = innerText01()
          wrap.style.backgroundColor = '#83b653';
        }, 1000)
        break;
      case (wheelDeltaTimes == 2):
        addRE()
        setTimeout(function () {
          removeRE()
          fruitImg.src = './IMG/orange001.png';
          cansImg.src = './IMG/soda-orange.png';
          drinktext.innerHTML = innerText02()
          wrap.style.backgroundColor = '#d49319';
        }, 1000)
        break;
      case (wheelDeltaTimes == 3):
        addRE()
        setTimeout(function () {
          removeRE()
          fruitImg.src = './IMG/peach001.png';
          cansImg.src = './IMG/soda-peach.png';
          drinktext.innerHTML = innerText03()
          wrap.style.backgroundColor = '#FFA385';
        }, 1000)
        break;
      case (wheelDeltaTimes == 4):
        addRE()
        setTimeout(function () {
          removeRE()
          fruitImg.src = './IMG/apple001.png';
          cansImg.src = './IMG/soda-red.png';
          drinktext.innerHTML = innerText04()
          wrap.style.backgroundColor = '#72b48e';
        }, 1000)
        break;
      default:
        addRE()
        setTimeout(function () {
          removeRE()
          wrap.style.backgroundColor = '#7cc7d3';
          fruitImg.src = './IMG/milk002.png';
          cansImg.src = './IMG/soda.png';
          drinktext.innerHTML = innerText00()
          wheelDelta = 0;
          wheelDeltaTimes = 0;
        }, 1000)
        break;
    }
  })


  
})();













