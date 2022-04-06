import { qs, qsa } from "./domUtils";

const containers = qsa(".modal-container");

const setEventListener = (modalOpenButton, modalCloseButton, modal) => {
  modalOpenButton.addEventListener("click", () => {
    modal.showModal();
  });

  modalCloseButton.addEventListener("click", () => {
    modal.close();
  });
};
//added comment 2
export const modalInit = () => {
  containers.forEach((container) => {
    const modal = qs(".modal", container);
    const modalOpenButton = qs(".open-button", container);
    const modalCloseButton = qs(".close-button", container);
    setEventListener(modalOpenButton, modalCloseButton, modal);
  });
};
