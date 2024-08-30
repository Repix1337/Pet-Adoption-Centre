import { PetItem } from "./PetItem";
import { Panel } from "./panel"


export function PetPanel() {
 return (
    <Panel headerText={"Select a Pet"} classNamee={"Pets"}>
        <PetItem name={"Cats"} imageSrc={"/images/cat.png"}/>
        <PetItem name={"Others"} imageSrc={"/images/rabbit.png"}/>
        <PetItem name={"Dogs"} imageSrc={"/images/dog.png"}/>
    </Panel>
    
 )
}