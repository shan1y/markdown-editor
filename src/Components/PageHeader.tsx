import React from 'react'
import menuIcon from "../../src/assets/icon-menu.svg"
import saveIcon from  "../../src/assets/icon-save.svg"
import deleteIcon from  "../../src/assets/icon-delete.svg"
import paperIcon from "../../src/assets/icon-document.svg"


function PageHeader() {
    return (

        <header className='bg-header-bkg flex justify-between items-center'>
            <div onClick={() => { console.log('clicked') }} className='flex h-72 w-72 justify-center bg-hamburger-bkg items-center'>
                <img src={menuIcon} alt="menu icon"></img>
            </div>
            <div className='flex w-6/12  flex-4 mx-4 items-center gap-4'>
                <div>
                    <img src={paperIcon} alt="document icon"></img>
                </div>
                <p className='text-white'>welcome.md</p>
            </div>
            <div className='flex gap-4'>
            <button>
                <img src={deleteIcon} alt="trash icon" />
            </button>
            <button className='bg-orange flex justify-center items-center w-40 h-40 rounded-md'>
                <img src={saveIcon} alt="save button" />
            </button>
            </div>
          

        </header>
      
       
    )
}

export default PageHeader