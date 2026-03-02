export const ShowModal = ({
  className = "fixed inset-0 z-50 flex items-center justify-center p-4",
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  type = "danger",
}) => {
  if (!isOpen) return null;
  const buttonColor =
    type === "danger"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-blue-600 hover:bg-blue-700";
  return (
    <>
      <div className={className}>
        {/* Backdrop */}
        {/* <div className="fixed inset-0" onClick={onClose}>hello</div> */}

        {/* Modal Content */}
        <div className=" bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-gray-600">{message}</p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              disabled={confirmText === "Logging Out..."}
              onClick={onConfirm}
              className={`${confirmText === "Logging Out..." ? "bg-gray-400" : `${buttonColor}`} px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors `}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
