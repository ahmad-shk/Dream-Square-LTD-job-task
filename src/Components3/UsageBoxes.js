import React from 'react'
import '../App.css'
export default function UsageBoxes({label,usage}) {
  return (
    <div className='usageBox flex items-center gap-6 p-2 bg-[#0d67a5] rounded-full border border-[#ffffff]'>
        <div className='motor p-6 rounded-full font-bold bg-[#c9c9c9] text-black flex items-center justify-center'>
            {label}
        </div>
        <div><p>{usage}</p></div>
    </div>
  )
}