import React from 'react'
import {ReactComponent as Eye }from '../assets/icon-show-preview.svg'
import {ReactComponent as ClosedEye} from '../assets/icon-hide-preview.svg'

interface Props {
  showMarkdown:boolean;
  setShowMarkdown:Function;
}

function Preview({showMarkdown, setShowMarkdown}:Props) {
  return (
    <section className='bg-grey-0 dark:bg-side-bkg  h-42 flex p-4 justify-between items-center "w-full" '>
        {showMarkdown? <h2 className='uppercase text-icon-grey dark:text-grey-2'>Markdown</h2> : <h2 className='uppercase text-icon-grey dark:text-grey-2'>Preview</h2> }
        {showMarkdown ? <ClosedEye onClick={()=>{setShowMarkdown(false)}} className=" cursor-pointer"/> : <Eye className=" cursor-pointer" onClick={()=>{setShowMarkdown(true)}} /> }
    </section>
  )
}

export default Preview