window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})
function toggleMenubar(){
  var menubarT = document.querySelector('.toggle');
  menubarT.classList.toggle('active');
  var menuPop = document.querySelector('.menubar');
  menuPop.classList.toggle('active')
}
