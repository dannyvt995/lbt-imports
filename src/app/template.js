'use client'

import { animatePageIn } from '@/utils/animations_loading';
import Image from 'next/image'

import { useEffect } from 'react';

export default function Template({ children }) {

    useEffect(() => {
        console.log("ENTER PAGE")
        animatePageIn()
    }, []);
   
    return (
        <div id='TEMPLATE-NEXT'>
            <div className='loading-scene' id="LOADING_SCENE">
                <div style={{margin:'auto'}}>
                    <Image 
                        src={'/logo_black.png'}
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width:"100%",height:"auto"}}
                    />
                </div>
            </div>
            { children }
        </div>
        
    );
}

