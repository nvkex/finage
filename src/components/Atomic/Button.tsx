
interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="px-8 py-2 text-sm bg-slate-800 text-slate-300 ">{children}</button>
    );
}