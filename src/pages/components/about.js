import { Panel } from "./panel.js"
import { Textarea } from "./textarea.js"
import { ImagePanel } from "./imagepanel.js"
export function About(){
    const text = "Welcome to our Pet Adoption Center! We are dedicated to finding loving homes for pets in need. Our team works tirelessly to care for and rehome animals, ensuring their health and happiness. Join us in making a difference—adopt, foster, or volunteer today!"
    return (
        <Panel headerText={"About Us"} classNamee={"About-us"}>
            <ImagePanel src={"./images/shelter2.png"}/>
            <Textarea text={text}/>
        </Panel>
    )
}