const btn = document.querySelector('.rent__button');
const popup = document.querySelector('.popup');

btn.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        document.querySelector('[data-modal]');
        popup.classList.add('popup--visible');
        
    });
});



// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("rent__button"),
//     closeModalBtn: document.querySelector("popup__window-button"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();