import { Panel } from "./panel.js"
import { Textarea } from "./textarea.js"
import { ImagePanel } from "./imagepanel.js"
export function Contact(){
    const text = "Nam eleifend odio hendrerit ultrices condimentum. Suspendisse finibus ullamcorper od"
    return (
        <Panel headerText={"Contact"} classNamee={"Contact"}>
            <ImagePanel src={"./images/shelter3.png"}/>
            <Textarea text={text}/>
        </Panel>
    )
}