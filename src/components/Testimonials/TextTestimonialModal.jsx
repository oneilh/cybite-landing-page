import { Modal } from "@mantine/core";

const TextTestimonialModal = ({ image, opened, close, modalOpened }) => {

  return (
    <Modal
      opened={modalOpened? opened: ''}
      onClose={close}
      size="auto"
      centered
      withCloseButton={false}
      overlayProps={{
        blur: 3,
      }}
      classNames={{
        body: "bg-slate-200 dark:bg-slate-800",
      }}
    >
      <div className=" w-[300px] h-[300px] border-2 border-blue-800  dark:border-blue-100 rounded-2xl overflow-clip">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </Modal>
  );
};

export default TextTestimonialModal;
