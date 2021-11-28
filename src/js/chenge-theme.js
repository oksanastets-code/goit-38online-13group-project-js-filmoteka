import refs from './get-refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

loadingThem();
refs.input.addEventListener('change', chengeTheme);

function chengeTheme() {
  refs.bodyEl.classList.toggle(Theme.DARK);
  refs.bodyEl.classList.toggle(Theme.LIGHT);

  getCurrentTheme(refs.bodyEl.classList);
}

function getCurrentTheme(currentThem) {
  localStorage.setItem('Theme', currentThem);
}

function loadingThem() {
  const savedThem = localStorage.getItem('Theme');
  if (savedThem === Theme.DARK) {
    refs.bodyEl.classList.add(savedThem);
    refs.input.checked = true;
  } else {
    refs.bodyEl.classList.add(Theme.LIGHT);
  }
}



//const body = document.querySelector('body')
//const checkbox = document.querySelector('#theme-switch-toggle')

//const Theme = {
 // LIGHT: 'light-theme',
 // DARK: 'dark-theme',
//};


//const checkTheme = localStorage.getItem('Theme');

//currentCheckTheme();
//checkboxCurrent();

//checkbox.addEventListener('change', onClickCheck);

//function onClickCheck(evt) {

  //if (evt.target.checked) {
  //  localStorage.setItem('Theme', Theme.DARK);
   // body.classList.add(Theme.DARK);
   
  //} else {
    //localStorage.setItem('Theme', Theme.LIGHT);
    //body.classList.remove(Theme.DARK);
    //body.classList.add(Theme.LIGHT);
    
  //}
  
//}

//function currentCheckTheme() {

 // if (!checkTheme) {
 //   localStorage.setItem('Theme', Theme.LIGHT);
  //  body.classList.add(Theme.LIGHT);
  //} else {
   // body.classList.add(checkTheme);
 // }
//}



//function checkboxCurrent() {

  //if (checkTheme === Theme.DARK) {
  //  checkbox.checked = true;
  //}
//}
