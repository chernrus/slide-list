(function(global) {

  var headers = document.getElementsByClassName('header-list');
  var contents = document.getElementsByClassName('content');
  var collapseSet = document.getElementById('collapse');
  var arr = [];
  var j;
  arr.push.apply(arr,headers);

  //Закрытие остальных элементов - коллизия
  var collapse = function (index) {
    for(j = 0; j < contents.length; j++) {
      if(contents[j].style.maxHeight &&  j!=index) {
        contents[j].style.maxHeight = null;
      }
    }
  };

  //действия на клик на один из элементов
  arr.forEach(function(item, i, arr) {
    item.onclick = function(event) {
      //установить display none
      if(contents[i].style.maxHeight) {
        contents[i].style.maxHeight = null;
      } else {
        contents[i].style.maxHeight = contents[i].scrollHeight + "px"; //Анимация от 0 до maxHeight
      }

      if(collapseSet.checked) {
        collapse(i);
      }
    };
  });
})(this);
