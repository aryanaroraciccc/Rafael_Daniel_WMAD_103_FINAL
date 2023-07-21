const hamburger = document.getElementById('hamburger-icon');
const navigation = document.getElementById('buttons_top');

hamburger.addEventListener('click', (event) => {
  navigation.classList.toggle('navbar-display');
});