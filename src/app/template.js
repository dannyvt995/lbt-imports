'use client'
import {useEffect} from 'react';
import Image from 'next/image'
import { animatePageIn } from "@/utils/animations_loading"
export default function Template({ children }) {
    useEffect(() => {
        console.log("template dire")
        //animatePageIn()
    }, [])
  
    return (
        <div id='TEMPLATE-NEXT'>
            {/* <div className='loading-scene' id="LOADING_SCENE">
                <div style={{margin:'auto'}}>
                    <Image 
                        src={'/logo.png'}
                        alt="logo"
                        width={250}
                        height={90}
                    />
                </div>
            </div> */}
            { children }
        </div>
        
    );
}

