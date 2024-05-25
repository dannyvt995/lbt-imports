import React from 'react'
import './style.css'
export default function TittleSectionStatic({children}) {
  return (
    <div className='tittle_section_static'>
        <h2>{children}</h2>
    </div>
  )
}
