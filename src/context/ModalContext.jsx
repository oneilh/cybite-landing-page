import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState(null); // To store course info

  const openModal = (course = null) => {
    setPreselectedCourse(course); // Set the course if passed
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreselectedCourse(null); // Clear pre-selected course on close
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, preselectedCourse }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// 3. Create a Custom Hook for easy use
export const useModal = () => {
  return useContext(ModalContext);
};
