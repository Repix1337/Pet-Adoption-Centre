export function Button({content,handleClick}){
    return (
        <button onClick={handleClick} id={content} className="${content}   bg-gray-800 p-3 border-black border-[3px] rounded-full  text-white hover:scale-110  font-bold  hover:bg-sky-900 duration-500" >
            {content}
        </button>
    )
}