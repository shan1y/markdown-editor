import React from 'react'
import useDocumentStore from "../stores/useDocumentStore"
type Props ={
setShowCreateModal:Function
}

function CreateModal({setShowCreateModal}:Props) {
  const addDocument = useDocumentStore((state)=>state.addDocument)


    const handleCreateDoc = (e: React.SyntheticEvent) => {
      e.preventDefault()
      const target = e.target as typeof e.target & {
       title:{value:string}
      };
      const title = target.title.value
      const newDoc = {
          "createdAt": Date.now(),
          "name": `${title}.md`,
          "content": ""
      }
      console.log(newDoc)
      addDocument(newDoc)
      setShowCreateModal(false)
    }


  return (
    <>
    <div className='overlay' onClick={()=>{setShowCreateModal(false)}}></div>
    <div className='center-modal dark:bg-side-bkg bg-white p-24  rounded-lg'>
    <form className="flex flex-col gap-2" onSubmit={handleCreateDoc}>
        <h4 className='text-lg font-bold dark:text-white'>Create new document</h4>
        <label id="title"   className='text-s flex text-icon-grey flex-col dark:text-white focus-none'>Document Title
    <input name="title" required className='outline-0 p-1 bg-grey-1 my-2 dark:bg-slider-grey'></input>
    </label>
    <button className='bg-orange text-white rounded py-1' type="submit">Create</button>
    </form>
    </div>
    </>)}


export default CreateModal