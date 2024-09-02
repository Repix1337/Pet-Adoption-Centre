export function Textarea({ text }) {
    return (
        <div className="w-full md:w-2/3 bg-gray-800 p-4 text-center text-4xl md:text-6xl text-white flex flex-col justify-center items-center">
            {text.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
        </div>
    );
}