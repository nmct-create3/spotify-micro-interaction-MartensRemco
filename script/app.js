document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.js-toggle').addEventListener('click', function (e) {
    console.log('clicked');
    //document.querySelector('.icon--check').classList.toggle('toggle__icon');
    document.querySelector('.icon--check').classList.toggle('added');
    document.querySelector('.icon--add').classList.toggle('added');
    document.querySelector('.icon--check').setAttribute('fill', '#1ed760');
  });
});
