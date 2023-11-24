import { useState } from 'react';

export const useMessageModal = (state) => {
  const [isModalOpen, setIsModalOpen] = useState(state);

  const handleOpenModal = () => {
    setIsModalOpen(() => true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(() => false);
  };

  return { isModalOpen, handleOpenModal, handleCloseModal };
};
