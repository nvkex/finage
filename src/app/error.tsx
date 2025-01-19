'use client';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    console.log({ error })
    return (
        <div className="flex align-baseline justify-center m-10">
            <div>
                <span>Oops</span> | <span>Something went wrong!</span>
            </div>
        </div>
    )
}