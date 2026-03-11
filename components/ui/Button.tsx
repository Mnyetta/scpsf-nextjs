"use client"; // VERY IMPORTANT

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
    >
      {children}
    </button>
  );
}