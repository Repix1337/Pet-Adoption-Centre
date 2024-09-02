export function Button({content,handleClick}){
    return (
        <button onClick={handleClick} id={content} className="${content}bg-slate-700 p-3 border-black border-[3px] rounded-full  text-white hover:scale-110   hover:bg-slate-500 duration-500" >
            {content}
        </button>
    )
}