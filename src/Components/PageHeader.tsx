import React from 'react'
import menuIcon from "../../src/assets/icon-menu.svg"
import saveIcon from  "../../src/assets/icon-save.svg"
import deleteIcon from  "../../src/assets/icon-delete.svg"
import paperIcon from "../../src/assets/icon-document.svg"
import closeMenuIcon from "../assets/icon-close.svg"

interface Props {
    setSidebar:Function
    sidebar:boolean
    setShowDeleteModal:Function
    markdownTitle:string
    saveChanges:Function
}

function PageHeader({setSidebar, sidebar, setShowDeleteModal,markdownTitle, saveChanges}:Props) {
    
    return (

        <header className='bg-header-bkg flex items-center pr-3'>
            <div onClick={() => { setSidebar(!sidebar)}} className='flex cursor-pointer h-72 min-w-[72px] justify-center bg-hamburger-bkg items-center'>
               {!sidebar ?<img src={menuIcon} alt="menu icon"></img>: <img src={closeMenuIcon} className="min-w-[30px] p-2" alt="close menu icon"></img> } 
            </div>
            <div className='flex justify-between w-full'>
            <div className='flex flex-4 mx-8 items-center gap-4'>
                <div>
                    <img src={paperIcon} className="min-w-[20px]" alt="document icon"></img>
                </div>
                <p className='text-white'>{markdownTitle}</p>
            </div>
            <div className='flex gap-4'>
            <button>
                <img onClick={()=>{setShowDeleteModal(true)}}src={deleteIcon} alt="trash icon" />
            </button>
            <button onClick={()=>{saveChanges()}} className='bg-orange flex justify-center items-center w-40 h-40 rounded-md'>
                <img src={saveIcon} alt="save button" />
            </button>
            </div>
            </div>
          

        </header>
      
       
    )
}

export default PageHeader