import React from 'react'
import Image from 'next/image'

import './style.css'
export default function GalleryEachStone({data}) {

  return (
    <div className='gallery_each_stone'>
    <div class="row">
        <div class="column">
            <div>
                <Image src={data[0]} alt="project1"
                  layout="responsive" width={1170} height={780}
                />
            </div>
            <div>
                <Image src={data[1]} alt="project1"
                  layout="responsive" width={1170} height={780}
                />
            </div>
      
        </div>
        <div class="column">
            <div>
                <Image src={data[2]} alt="project1"
                  layout="responsive" width={1170} height={780}
                />
            </div>
            <div>
                <Image src={data[3]} alt="project1"
                  layout="responsive" width={1170} height={780}
                />
            </div>
      
        </div>
        <div class="column">
            <div>
                <Image src={data[4]} alt="project1"
                  layout="responsive" width={1170} height={780}
                />
            </div>
           
        </div>

    </div>

</div>
  )
}
