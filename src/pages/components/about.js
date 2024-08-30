import { Panel } from "./panel.js"
import { Textarea } from "./textarea.js"
import { ImagePanel } from "./imagepanel.js"
export function About(){
    const text = "Nam eleifend odio hendrerit ultrices condimentum. Suspendisse finibus ullamcorper od"
    return (
        <Panel headerText={"About Us"} classNamee={"About-us"}>
            <ImagePanel src={"./images/shelter2.png"}/>
            <Textarea text={text}/>
        </Panel>
    )
}