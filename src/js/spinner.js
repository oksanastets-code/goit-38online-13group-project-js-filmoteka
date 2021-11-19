import * as basicLightbox from 'basiclightbox';

const markup = `<div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>`;

const spinner = basicLightbox.create(markup);

export default { spinner };
// Если хотите показать спиннер spinner.show();
// Если скрыть spinner.close();
