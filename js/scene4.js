function scene4() {

  // Setup Stage
  var lake = document.querySelector('#kings-landing')

  var mySrc = lake.getAttribute('src');

  var stageImg = document.querySelector('#stage-img')

  stageImg.setAttribute('src', mySrc)
  stage.style.zIndex = -1;
  // Setup Cast

  // Character 1
  var tyrionContainer = document.createElement('div');
  stage.append(tyrionContainer);
  tyrionContainer.id = 'tyrion-container';
  // tyrionContainer.style.border = '2px solid red';
  tyrionContainer.style.position = 'absolute'
  tyrionContainer.style.left = '20%';
  tyrionContainer.style.top = '40%';
  tyrionContainer.style.width = '60px';
  tyrionContainer.style.height = '132px';
  tyrionContainer.append(tyrion);
  tyrion.style.position = 'absolute';
  tyrion.style.width = '45px';
  tyrion.style.left = '10px';
  tyrion.style.top = '5px';
  tyrion.style.zIndex = 2;

  blackLeather = document.querySelector('#black-leather');
  tyrionContainer.append(blackLeather);
  blackLeather.style.position = 'absolute';
  blackLeather.style.bottom = '2px';
  blackLeather.style.zIndex = 0;

  // Character 2

  var danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.id = 'danerys-container';
  // danerysContainer.style.border = '2px solid red';
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.left = '70%';
  danerysContainer.style.top = '40%';
  danerysContainer.style.width = '60px';
  danerysContainer.style.height = '132px';
  danerysContainer.append(danerys);
  danerys.style.position = 'absolute';
  danerys.style.width = '40px'

  blueDress = document.querySelector('#blue-dress');
  danerysContainer.append(blueDress);
  blueDress.style.position = 'absolute';
  blueDress.style.bottom = '4px';


  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    tyrion.style.transform = 'rotateY(180deg)';
    danerys.style.transform = 'rotateY(180deg)';
  })

  frame(function() {
    tyrionContainer.style.left = '35%';
    danerysContainer.style.top = '80%' ;

  })

  frame(function() {
    tyrionContainer.style.left = '50%';
    danerysContainer.style.right = '40%';
  })

  frame(function() {
    tyrionContainer.style.left = '60%';
    danerysContainer.style.right = '75%';
  })

  frame(function() {
    tyrionContainer.style.top = '50%';
    danerysContainer.style.right = '80%';
  })

  frame(function() {
    tyrionContainer.style.left = '50%';
    tyrion.style.transform = 'rotateY(360deg)';
    danerysContainer.style.right = '150%';
    danerys.style.transform = 'rotateY(360deg)';
  })

  frame(function() {
    tyrionContainer.style.left = '20%';
  })

  // Stage direction 2

  frame(function() {
    tyrionContainer.style.top = '60%';
  })

  frame(function() {
    tyrionContainer.style.top = '65%';
    tyrionContainer.style.zIndex = -1;
  })

}
