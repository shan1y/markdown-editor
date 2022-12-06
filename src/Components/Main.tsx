import React, { useState } from 'react'
import PageHeader from './PageHeader'
import Preview from './Preview'
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
 const setDocumentTitle = useDocumentStore((state)=>state.setDocumentTitle)
 const markdownTitle = useDocumentStore((state:any)=>state.documentTitle)
  const [markdown, setMarkdown] = useState<string>("")
  const [showMarkdown, setShowMarkdown] = useState(true)
  const [sidebar, setSidebar] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)


 
  const handleMarkdownChange = (e: React.FormEvent) => {
     setMarkdown((e.target as HTMLFormElement).value)
  }

  const setSelectedDoc = (title: string) => {
    const selectedDoc = docs.find((item: Data) => {
      return title === item.name
    })
    if(selectedDoc){
    setDocumentTitle(selectedDoc.name)
     setMarkdown(selectedDoc.content)}
  }


  const saveChanges = () => {
    const selectedDoc = docs.find((item:Data)=>{
      return markdownTitle === item.name
    })
    selectedDoc.content = markdown
    saveDocument(selectedDoc, docs)
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
          {showMarkdown && <textarea onClick={()=>{setSidebar(false)}} className="p-4 h-screen border-none dark:bg-dark-bkg bg-white dark:text-white w-full outline-0 outline-0" value={markdown} onChange={(e) => { handleMarkdownChange(e) }}></textarea>}
          {!showMarkdown && < ReactMarkdown className='pt-2 preview dark:bg-dark-bkg bg-white h-screen px-4'>{markdown}</ReactMarkdown>}
        </div>
      </div>
    </>
  )
}

export default Main