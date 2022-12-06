import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'
import Preview from './Preview'
import data from '../assets/data/data.json'
import ReactMarkdown from 'react-markdown'
import Side from './Side'
import CreateModal from './CreateModal'
import DeleteModal from './DeleteModal'
import useDocumentStore from "../stores/useDocumentStore";

type Data = {
  createdAt: string,
  name: string,
  content: string
}


function Main() {
 const  docs = useDocumentStore((state:any) => state.documents);
 const saveDocument = useDocumentStore((state)=>state.saveDocument)
 const setDocuments = useDocumentStore((state)=>state.setDocuments)
  const [markdown, setMarkdown] = useState<string>("")
  const [showMarkdown, setShowMarkdown] = useState(true)
  const [sidebar, setSidebar] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [markdownTitle, setMarkdownTitle] = useState<string>("")

 
  const handleMarkdownChange = (e: React.FormEvent) => {
     setMarkdown((e.target as HTMLFormElement).value)
  }

  const setSelectedDoc = (title: string) => {
    const selectedDoc = docs.find((item: Data) => {
      return title === item.name
    })
    if(selectedDoc){
    setMarkdownTitle(selectedDoc.name)
     setMarkdown(selectedDoc.content)}
  }


  const saveChanges = () => {
    const selectedDoc = docs.find((item:Data)=>{
      return markdownTitle === item.name
    })
    selectedDoc.content = markdown
    saveDocument(selectedDoc, docs, selectedDoc.content)
  }
 

  return (
    <>
      {showDeleteModal && <DeleteModal setShowDeleteModal={setShowDeleteModal} />}
      {showCreateModal && <CreateModal  setShowCreateModal={setShowCreateModal} />}
      <div className='flex relative bg-dark-bkg'>
        <Side setSelectedDoc={setSelectedDoc} sidebar={sidebar} setShowCreateModal={setShowCreateModal}/>
        <div className={sidebar ? 'open-right' : 'close-right'} >
          <PageHeader setShowDeleteModal={setShowDeleteModal} setSidebar={setSidebar} sidebar={sidebar} saveChanges={saveChanges} markdownTitle={markdownTitle}/>
          <Preview setShowMarkdown={setShowMarkdown} showMarkdown={showMarkdown} />
          {showMarkdown && <textarea className="p-4 h-screen dark:bg-dark-bkg dark:text-white w-full" value={markdown} onChange={(e) => { handleMarkdownChange(e) }}></textarea>}
          {!showMarkdown && < ReactMarkdown className='preview dark:bg-dark-bkg  px-4'>{markdown}</ReactMarkdown>}
        </div>
      </div>
    </>
  )
}

export default Main