var blocks = document.getElementsByClassName('number__block');
var numbers = document.getElementsByClassName('number');

for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener(
    'mouseenter',
    function () {
      numbers[i].classList.add('number__animation');
      console.log('slovo');
    },
    false,
  );
}
