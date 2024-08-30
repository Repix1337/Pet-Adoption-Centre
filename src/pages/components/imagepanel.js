
export function ImagePanel({src}){
    return(
        <img src={src} alt="Panel" className="w-full md:w-1/3 h-40 md:h-auto object-cover" />
    )
}