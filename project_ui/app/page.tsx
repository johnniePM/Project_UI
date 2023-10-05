"use client"
import { Container } from '@/components'
import { getWindowDimensions } from '@/hooks/window'
import Image from 'next/image'
import { RiSignalWifiFill, RiSignalWifi2Fill, RiSignalWifi1Fill } from 'react-icons/ri';
import { IconContext } from "react-icons";

export default function Home() {

  return (
    <Container  >
      <div id="Top" className='flex flex-row  bg-fuchsia-100 h-[5%] w-screen'>
        <div id="left" className='flex- flex-1'>

        <IconContext.Provider value={{ color: "blue", className: "flex flex-1", size:"22px" }}>
            <RiSignalWifi1Fill />
        </IconContext.Provider>;
        </div>

        <div id="right">
        <IconContext.Provider value={{ color: "blue", className: "flex flex-1", size:"22px" }}>

          <div className=''>
            <RiSignalWifi1Fill />
          </div>
        </IconContext.Provider>;
        </div>
      </div>
      <div id="grid"></div>
      <div id="botom" ></div>
      <div id="nav"></div>
    </Container>

  )
}
