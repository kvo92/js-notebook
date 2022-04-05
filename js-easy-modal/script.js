import { qs, qsa } from "./domUtils";

const containers = qsa(".modal-container");

const setEventListner = (modalOpenButton, modalCloseButton, modal) => {
  modalOpenButton.addEventListener("click", () => {
    modal.showModal();
  });

  modalCloseButton.addEventListener("click", () => {
    modal.close();
  });
};

export const modalInit = () => {
  containers.forEach((container) => {
    const modal = qs(".modal", container);
    const modalOpenButton = qs(".open-button", container);
    const modalCloseButton = qs(".close-button", container);
    setEventListner(modalOpenButton, modalCloseButton, modal);
  });
};