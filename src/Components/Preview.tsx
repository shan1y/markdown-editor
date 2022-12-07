import React from 'react'
import { ReactComponent as Eye } from '../assets/icon-show-preview.svg'
import { ReactComponent as ClosedEye } from '../assets/icon-hide-preview.svg'

interface Props {
  showMarkdown: boolean;
  setShowMarkdown: Function;
  isDesktop: boolean
  isLeft: boolean
  single: boolean
  setIsHidden: Function
  isHidden: boolean
}

function Preview({ showMarkdown, setShowMarkdown, isDesktop, isLeft, single, setIsHidden, isHidden }: Props) {
  return (<>
    {!isDesktop && !isLeft &&
      (<section className='bg-grey-0 dark:bg-side-bkg  h-42 flex p-4 justify-between items-center "w-full" '>
        {showMarkdown ? <h2 className='uppercase text-icon-grey dark:text-grey-2'>Markdown</h2> : <h2 className='uppercase text-icon-grey dark:text-grey-2'>Preview</h2>}
        {showMarkdown ? <ClosedEye onClick={() => { setShowMarkdown(false) }} className=" cursor-pointer" /> : <Eye className=" cursor-pointer" onClick={() => { setShowMarkdown(true) }} />}
      </section>)}
    {(isDesktop && single) && (<section className='bg-grey-0 dark:bg-side-bkg  h-42 flex p-4 justify-between items-center "w-full" '>
      {<h2 className='uppercase text-icon-grey dark:text-grey-2'>Preview</h2>}
      {isHidden ? <ClosedEye onClick={() => { setIsHidden(false) }} className=" cursor-pointer" /> : <Eye className=" cursor-pointer" onClick={() => { setIsHidden(true) }} />}
    </section>)}
    {isLeft && (<section className='bg-grey-0 dark:bg-side-bkg  h-42 flex p-4 justify-between items-center "w-full" '>
      <h2 className='uppercase text-icon-grey dark:text-grey-2'>Markdown</h2>
    </section>)}
  </>
  )
}

export default Preview