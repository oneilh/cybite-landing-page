import { useModal } from "../../context/ModalContext";

const GetStartedBtn = () => {
  const { openModal } = useModal();
  return (
    <button
      className="px-8 py-3 bg-[var(--primary)] text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer"
      onClick={() => openModal()}
    >
      Get Started
    </button>
  );
};

export default GetStartedBtn;
