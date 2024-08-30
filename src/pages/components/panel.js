export function Panel({ children, headerText, classNamee }) {
    return (
        <div className={`w-full ${classNamee}`}>
            <h1 className="flex justify-center text-8xl text-white p-5 mt-2 bg-slate-700">{headerText}</h1>
            <div className="w-full flex flex-wrap justify-evenly overflow-y-auto overflow-x-hidden mt-2">
                {children}
            </div>
        </div>
    )
}