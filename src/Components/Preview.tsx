import React from 'react'
import eye from '../assets/icon-show-preview.svg'
import closedEye from '../assets/icon-hide-preview.svg'

interface Props {
  showMarkdown:boolean;
  setShowMarkdown:Function;
}

function Preview({showMarkdown, setShowMarkdown}:Props) {
  return (
    <section className='bg-grey-0 dark:bg-side-bkg  h-42 flex p-4 justify-between items-center "w-full" '>
        {showMarkdown? <h2 className='uppercase text-icon-grey dark:text-grey-2'>Markdown</h2> : <h2 className='uppercase text-icon-grey dark:text-grey-2'>Preview</h2> }
        {showMarkdown ? <img onClick={()=>{setShowMarkdown(false)}}src={closedEye} className="dark:contrast-200 dark:invert" alt="preview icon"></img> : <img className="dark:contrast-200 dark:invert" onClick={()=>{setShowMarkdown(true)}}src={eye} alt="hide preview icon" /> }
    </section>
  )
}

export default Preview