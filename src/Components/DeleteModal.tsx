import React from 'react'
import useDocumentStore from "../stores/useDocumentStore"

type Props = {
setShowDeleteModal:Function
}

function DeleteModal({setShowDeleteModal}:Props) {
  const deleteDocument = useDocumentStore((state)=>state.deleteDocument)
  const markdownTitle = useDocumentStore((state:any)=>state.documentTitle)
  const docs = useDocumentStore((state:any)=>state.documents)



  return (
    <>
    <div className='overlay' onClick={()=>{setShowDeleteModal(false)}}></div>
    <div className='center-modal-delete dark:bg-side-bkg bg-white p-24 max-w-["60px"]  rounded-lg'>
    <h4 className='text-lg font-bold dark:text-white'>Delete this Document?</h4>
    <p className='dark:text-white text-icon-grey py-2 text-sm'>Are you sure you want to delete the 'welcome.md' document and its contents? This action cannot be reverted.</p>
    <button onClick={()=>{deleteDocument(markdownTitle,docs); setShowDeleteModal(false)}} className='bg-orange mt-2 cursor-pointer px-2 text-white rounded py-1' type="submit">Confirm & Delete</button>
    </div>
    </>
  )
}

export default DeleteModal