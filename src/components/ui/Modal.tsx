interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  isError?: boolean;
  message?: string;
}

export function Modal({ isOpen, onClose, isError, message }: ModalProps) {
  if (!isOpen) return null;
  console.log('error message', message)

  const title = isError ? 'Error' : 'Success'
  return (
    <div className="fixed inset-0 backdrop-opacity-50 bg-gray-200/65 flex items-center justify-center">
      <div className="bg-white w-2/5 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-black font-semibold mb-4">{title}</h3>
        <p className={`mb-4 text-black ${isError && 'text-red-500'}`}>{message || 'Your information has been submitted successfully.'}</p>
        {/* {children} */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
} 