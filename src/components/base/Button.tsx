type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition ${className}`}
    >
      {text}
    </button>
  );
}
