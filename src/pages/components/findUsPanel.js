import { Panel } from "./panel.js"
import { Textarea } from "./textarea.js"
import { ImagePanel } from "./imagepanel.js"
export function FindUsPanel() {
    const text = "You can find our shelters in: Warszawa, Lublin, Wrocław, Gdańsk"
    return ( 
        <Panel headerText="Where to find us" classNamee={"Find-us"} >
            <div className=" w-full flex flex-wrap md:flex-nowrap">
                <ImagePanel src={"./images/shelter.png"}/>
                <Textarea text={text}/>
                    
                
            </div>
        </Panel>
    )
}