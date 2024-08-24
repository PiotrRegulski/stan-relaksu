import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  message: string;
}
const SuccessModal: React.FC<ModalProps> = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Wiadomość</h2>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
