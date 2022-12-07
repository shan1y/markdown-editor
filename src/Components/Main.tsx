import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'
import Preview from './Preview'
import ReactMarkdown from 'react-markdown'
import Side from './Side'
import CreateModal from './CreateModal'
import DeleteModal from './DeleteModal'
import useDocumentStore from "../stores/useDocumentStore";
import Swal from "sweetalert2"

type Data = {
  createdAt: string,
  name: string,
  content: string
}


function Main() {
  const docs = useDocumentStore((state: any) => state.documents);
  const setMarkdownContent = useDocumentStore((state: any) => state.setMarkdownContent);
  const saveDocument = useDocumentStore((state) => state.saveDocument)
  const setDocumentTitle = useDocumentStore((state) => state.setDocumentTitle)
  const markdownTitle = useDocumentStore((state: any) => state.documentTitle)
  const markdownContent = useDocumentStore((state: any) => state.markdownContent)
  const [showMarkdown, setShowMarkdown] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)


  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true)
    }
  }, [])


  const handleMarkdownChange = (e: React.FormEvent) => {
    setMarkdownContent((e.target as HTMLFormElement).value)
  }

  const setSelectedDoc = (title: string) => {
    const selectedDoc = docs.find((item: Data) => {
      return title === item.name
    })
    if (selectedDoc) {
      setDocumentTitle(selectedDoc.name)
      setMarkdownContent(selectedDoc.content)
    }
  }


  const saveChanges = () => {
    const selectedDoc = docs.find((item: Data) => {
      return markdownTitle === item.name
    })
    selectedDoc.content = markdownContent
    saveDocument(selectedDoc, docs)
    Swal.fire({
      icon: 'success',
      title: 'Changes have been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }


  return (
    <>
      {showDeleteModal && <DeleteModal setShowDeleteModal={setShowDeleteModal} />}
      {showCreateModal && <CreateModal setShowCreateModal={setShowCreateModal} />}
      <div className='flex relative dark:bg-dark-bkg bg-white'>
        <Side setSelectedDoc={setSelectedDoc} sidebar={sidebar} setShowCreateModal={setShowCreateModal} />
        <div className={sidebar ? 'open-right--main' : 'close-right--main'} >
          <PageHeader setShowDeleteModal={setShowDeleteModal} setSidebar={setSidebar} sidebar={sidebar} saveChanges={saveChanges} markdownTitle={markdownTitle} />
          {isDesktop && <div className='flex'>
            {!isHidden && (
              <div className='sec-grow '>
                <Preview isHidden={false} setIsHidden={setIsHidden} isDesktop={isDesktop} single={false} isLeft={true} setShowMarkdown={setShowMarkdown} showMarkdown={showMarkdown} />
                <textarea onClick={() => { setSidebar(false) }} className=" resize-none p-4 h-full border-none dark:bg-dark-bkg bg-white dark:text-white w-full outline-0 outline-0" value={markdownContent} onChange={(e) => { handleMarkdownChange(e) }}></textarea>
              </div>)}
            <div className={isHidden ? `w-full` : `sec-grow`}>
              <Preview isHidden={isHidden} single={true} setIsHidden={setIsHidden} isDesktop={isDesktop} isLeft={false} setShowMarkdown={setShowMarkdown} showMarkdown={showMarkdown} />
              <ReactMarkdown className='lg:w-3/4 h-full pt-2 preview dark:bg-dark-bkg bg-white h-screen px-4'>{markdownContent}</ReactMarkdown>
            </div>
          </div>}
          {!isDesktop &&
            (<div><Preview isHidden={false} setIsHidden={setIsHidden} single={true} isDesktop={false} isLeft={false} setShowMarkdown={setShowMarkdown} showMarkdown={showMarkdown} />
              <div onClick={() => { setSidebar(false) }} className='flex justify-center'>
                {showMarkdown && <textarea onClick={() => { setSidebar(false) }} className="lg:w-3/4 h-full p-4 h-screen border-none dark:bg-dark-bkg bg-white dark:text-white w-full outline-0 outline-0" value={markdownContent} onChange={(e) => { handleMarkdownChange(e) }}></textarea>}
                {!showMarkdown && < ReactMarkdown className='lg:w-3/4 h-full pt-2 preview dark:bg-dark-bkg bg-white h-screen px-4'>{markdownContent}</ReactMarkdown>}
              </div></div>)}



        </div>
      </div>
    </>
  )
}

export default Main