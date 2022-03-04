const openBtns = document.querySelectorAll("[data-open-modal]");
const closeBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

// open modal
openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(btn.dataset.openModal);
    openModal(modal);
  });
});

// close modal
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    closeModal(modal);
  });
});

// overlay click to close
if (overlay) {
  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => closeModal(modal));
  });
}

// open modal logic by applying class active
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

// close modal logic by removing closs active
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
