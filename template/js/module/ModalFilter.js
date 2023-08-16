// open menu mobile
export default function ModalFilter() {
  var openModalBtn = document.querySelector('.filter-mobile');
  var modalFilter = document.querySelector('.side-fixed');
  var siteModal = document.querySelector('.side-overlay');

  if (openModalBtn) {
    openModalBtn.addEventListener('click', function () {
      modalFilter.classList.add('open');
      siteModal.classList.add('open');
    });
  }
}
