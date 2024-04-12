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
                        src={'/logo.png'}
                        alt="logo"
                        width={250}
                        height={90}
                    />
                </div>
            </div>
            { children }
        </div>
        
    );
}

