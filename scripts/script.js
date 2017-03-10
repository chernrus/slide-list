(function(global) {

  var headers = document.getElementsByClassName('header-list');
  var contents = document.getElementsByClassName('content');
  var arr = [];
  var j;
  arr.push.apply(arr,headers);
  console.log(headers);

  var collapse = function (index) {
    for(j = 0; j < contents.length; j++) {
      if(contents[j].style.display == 'block' &&  j!=index) {
        contents[j].style.display = 'none';
      }
    }
  };

  arr.forEach(function(item, i, arr) {
    item.onclick = function(event) {
      //установить display none
      if(contents[i].style.display == 'block') {
        contents[i].style.display = 'none';
      } else {
        contents[i].style.display = 'block';
      }

      collapse(i);
    };
  });
})(this);
