import React from 'react'
import eye from '../assets/icon-show-preview.svg'
import closedEye from '../assets/icon-hide-preview.svg'

interface Props {
  showMarkdown:boolean;
  setShowMarkdown:Function;
}

function Preview({showMarkdown, setShowMarkdown}:Props) {
  return (
    <section className='bg-grey-0 h-42 flex p-4 justify-between items-center'>
        {showMarkdown? <h2 className='uppercase text-icon-grey'>Markdown</h2> : <h2 className='uppercase text-icon-grey'>Preview</h2> }
        {showMarkdown ? <img onClick={()=>{setShowMarkdown(false)}}src={closedEye} alt="preview icon"></img> : <img  onClick={()=>{setShowMarkdown(true)}}src={eye} alt="hide preview icon" /> }
    </section>
  )
}

export default Preview