

$('.fa-caret-right').on('click', function(e) {
  console.log(e.target.dataset['id']);
  var id = e.target.dataset['id'];
  $('#' + id).toggle();
  $(e.target).toggleClass('rotate');
})


$('.reload').on('click', function(e) {
  console.log(e.target.dataset['id']);
  var id = e.target.dataset['id'];
  console.dir(document.getElementById(id));
  document.getElementById(id).src = document.getElementById(id).src
})
