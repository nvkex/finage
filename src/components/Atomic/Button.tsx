interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = "", ...btnProps }: ButtonProps) {
    return (
        <button className={`px-8 py-2 text-sm bg-slate-800 text-slate-300 ${className}`} {...btnProps} >{children}</button>
    );
}