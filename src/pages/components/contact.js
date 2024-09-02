import { Panel } from "./panel.js"
import { Textarea } from "./textarea.js"
import { ImagePanel } from "./imagepanel.js"
export function Contact(){
    const text = "+48 123 432 679 \n pet-centre@gmail.com"
    return (
        <Panel headerText={"Contact"} classNamee={"Contact"}>
            <ImagePanel src={"./images/shelter3.png"}/>
            <Textarea text={text}/>
        </Panel>
    )
}