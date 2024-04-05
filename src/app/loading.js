'use client'
import React from 'react';
import Image from 'next/image'
import gsap from 'gsap/gsap-core';
function Loading()  {
    const loadingScene = React.useRef(null)
    React.useEffect(() => {
        gsap.to(loadingScene.current , { clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",duration:1,delay:1 })
    },[loadingScene])
  
    return (
        <div className='loading-scene' id="LOADING_SCENE" ref={loadingScene}>
            <div style={{margin:'auto'}}>
                <Image 
                    src={'/logo.png'}
                    alt="logo"
                    width={250}
                    height={90}
                />
            </div>
        </div>
    );
}

export default Loading;
