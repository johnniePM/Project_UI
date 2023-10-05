
import { IContainerProps } from "@/Constants/types";

export default function Container(props:IContainerProps){

return(
    <div  className="bg-white flex flex-1 h-screen w-screen overflow-hidden ">
    {props.children}
    </div>
)
}