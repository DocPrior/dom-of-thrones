function scene3() {

  // Setup Stage
 var mySrc = desert.getAttribute('src');

 var stageImg = document.querySelector('#stage-img');

 stageImg.setAttribute('src', mySrc);
  // Setup Cast
  var danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.id = 'danerys-container';
  // danerysContainer.style.border = '2px solid red';
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.left = '20%';
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


  var drogoContainer = document.createElement('div');
  stage.append(drogoContainer);
  drogoContainer.id = 'drogo-container';
  // drogoContainer.style.border = '2px solid red';
  drogoContainer.style.position = 'absolute';
  drogoContainer.style.left = '70%';
  drogoContainer.style.top = '40%';
  drogoContainer.style.width = '60px';
  drogoContainer.style.height = '132px';
  drogoContainer.append(drogo);
  drogo.style.position = 'absolute';
  drogo.style.left = '10px';
  drogo.style.width = '45px';

  bulkyMan = document.querySelector('#bulky-man');
  drogoContainer.append(bulkyMan);
  bulkyMan.style.position = 'absolute';
  bulkyMan.style.bottom = 0;

  // Character 1

  // Character 2

  // Setup Props
  stage.append(egg)
  egg.style.position = 'absolute';
  egg.style.left = '28%';
  egg.style.top = '50%';
  egg.style.width = '40px';
  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.left = '28%';
  })

  frame(function() {
    egg.style.left = '34%';
  })

  frame(function() {
    egg.style.left = '45%';
  })

  frame(function() {
    egg.style.left = '53%';
  })

  frame(function() {
    egg.style.left = '65%';
  })

  // Stage direction 2

for (eggLeft = 65; eggLeft > 28; eggLeft -= 10) {
  frame(drogoThrowsEgg);
}

function drogoThrowsEgg() {
  egg.style.left = (parseInt(egg.style.left) - 10) + '%';
}

}
