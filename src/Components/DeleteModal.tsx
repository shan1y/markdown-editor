import React from 'react'

type Props = {
setShowDeleteModal:Function
}

function DeleteModal({setShowDeleteModal}:Props) {
  return (
    <>
    <div className='overlay' onClick={()=>{setShowDeleteModal(false)}}></div>
    <div className='center-modal-delete dark:bg-side-bkg bg-white p-24 max-w-["40px"]  rounded-lg'>
    <h4 className='text-lg font-bold dark:text-white'>Delete this Document?</h4>
    <p className='dark:text-white text-icon-grey py-2 text-sm'>Are you sure you want to delete the 'welcome.md' document and its contents? This action cannot be reverted.</p>
    <button className='bg-orange mt-2 cursor-pointer px-2 text-white rounded py-1' type="submit">Confirm & Delete</button>
    </div>
    </>
  )
}

export default DeleteModal