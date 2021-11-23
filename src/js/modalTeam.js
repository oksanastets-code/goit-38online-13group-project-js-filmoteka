// временный файл(черновик)
import teamTemplate from '../templates/modalTeam.hbs';
import teamJson from '../JSON/Team.json';

// подключить  basiclightbox !!!!!!!!!!!!!!!!!!!!

import * as basicLightbox from 'basiclightbox';
// import 'basicLightbox/src/styles/main.scss';

const modalTeamContainerRefs = document.querySelector('#js-team-modal'); // добавить потом с футера
modalTeamContainerRefs.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  try {
    getTeamInfo(teamJson); //дописать функция для получения данных из Json!!!!!!!!!!!!!!!
  } catch (error) {
    errorModal();
  }
}

function errorModal() {
  return alert('ошибка! нажмите ок или обновите!');
}

// написать функцию закрытия и подключить ее!!!!!!!!!!
function getTeamInfo(teamId) {
  const teamMarkup = teamTemplate(teamId);
  const modalContent = basicLightbox.create(teamMarkup);

  modalContent.show();

  window.addEventListener('keydown', closeModalEsc);

  function closeModalEsc(e) {
    e.preventDefault();
    if (e.code === 'Escape') {
      modalContent.close();

      window.removeEventListener('keydown', closeModalEsc);
    }
  }
  const btnCloseModalTeamRef = document.querySelector('.close__button');

  btnCloseModalTeamRef.addEventListener('click', closeModalBtn);

  function closeModalBtn() {
    modalContent.close();

    btnCloseModalTeamRef.removeEventListener('click', closeModalBtn);
  }
}
