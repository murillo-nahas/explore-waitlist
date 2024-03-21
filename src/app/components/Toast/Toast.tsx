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
    <div
      className={`flex items-center gap-4 mb-6 p-4 rounded-lg w-96 bg-transparent border ${borderColor} hover:bg-black hover:cursor-pointer`}
    >
      <span className="text-2xl">{emoji}</span>
      <div>
        <p className="font-bold text-white">
          {title} {firstname}
        </p>
        <p className="text-sm text-label">{message}</p>
      </div>
    </div>
  );
}
