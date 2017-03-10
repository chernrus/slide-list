(function(global) {

  var first = document.getElementById('header-1');
  var content = document.getElementById('content-1');
  content.style.display = "none";

  first.onclick = function(event) {
    if(content.style.display == "block") {
      content.style.display = "none"
    } else {
      content.style.display = "block";
    }
  };

  var second = document.getElementById('header-2');
  var content_2 = document.getElementById('content-2');
  content_2.style.display = "none";

  second.onclick = function(event) {
    if(content_2.style.display == "block") {
      content_2.style.display = "none"
    } else {
      content_2.style.display = "block";
    }
  };

})(this);
