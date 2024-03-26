type ToastProps = {
  emoji: "✅" | "❌";
  title?: string;
  firstname?: string;
  message: string;
  borderColor: string;
};

export function Toast({
  emoji,
  title,
  firstname,
  message,
  borderColor,
}: ToastProps) {
  return (
    <div className="fixed inset-0 bg-gray bg-opacity-90 flex items-center justify-center">
      <div
        className={`flex items-center bg-black gap-4 mb-6 p-4 rounded-lg w-96 bg-transparent border ${borderColor}`}
      >
        <span className="text-2xl">{emoji}</span>
        <div>
          <p className="font-bold text-white">
            {title} {firstname}
          </p>
          <p className="text-sm text-label">{message}</p>
        </div>
      </div>
    </div>
  );
}
