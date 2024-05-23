import React from 'react'
import './style.css'
export default function FixedBannerBackground({backgroundImage,backgroundSize,backgroundPosX,backgroundPosY}) {
  return (
    <div className='fixed_banner_background' id="fixed_banner_background" style={{background:`url(${backgroundImage})`,
    backgroundSize:`${backgroundSize}`,
    backgroundPositionY:`${backgroundPosY}`

}}></div>
  )
}
