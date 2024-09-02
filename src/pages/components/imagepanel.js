
export function ImagePanel({src}){
    return(
        <div className="bg-gray-800 w-1/3">
        <img src={src} alt="Panel" className="w-full   p-3 h-40 md:h-auto object-cover rounded-3xl" />
        </div>
    )
}