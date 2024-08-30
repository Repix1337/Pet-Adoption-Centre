export function Button({content,handleClick}){
    return (
        <button onClick={handleClick} id={content} className="${content}bg-slate-700 p-3 border-black border-[3px] rounded-full mr-5 w-32 text-white " >
            {content}
        </button>
    )
}