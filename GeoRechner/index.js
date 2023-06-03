
let elements = document.getElementsByClassName('index_box_inner');

for(let i = 0; i< elements.length; i++){
  elements[i].addEventListener('mouseenter', function(){
    let aTag = this.querySelector('a');
    aTag.style.color = '#FFD56F';
    /*aTag.style.backgroundColor = 'red'*/
  });

  elements[i].addEventListener('mouseleave', function(){
    let aTag = this.querySelector('a');
    aTag.style.color = '';
    aTag.style.backgroundColor = '';
  });
}