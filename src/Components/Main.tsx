import React, {useState} from 'react'
import PageHeader from './PageHeader'
import Preview from './Preview'
import data from '../assets/data/data.json'
import ReactMarkdown from 'react-markdown'
import Side from './Side'
import CreateModal from './CreateModal'
import DeleteModal from './DeleteModal'

type Data = {
  createdAt: string,
  name: string,
  content: string
}

function Main() {
  const [markdown, setMarkdown] = useState<Data>(data[1])
  const [showMarkdown, setShowMarkdown] = useState(true)
  const [sidebar, setSidebar] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleMarkdownChange =(e:React.FormEvent)=>{
   setMarkdown((e.target as HTMLFormElement).value)
  }

  const setSelectedDoc = (title:string) =>{

    const data = JSON.parse(JSON.parse(localStorage.getItem('documents')|| '').state.documents)
    console.log(data)
  const selectedDoc = data.find((item:any)=>{
    return title === item.name
  })
  setMarkdown(selectedDoc)
  }

  return (
<>
{showDeleteModal && <DeleteModal setShowDeleteModal={setShowDeleteModal}/>}
    {showCreateModal && <CreateModal setShowCreateModal={setShowCreateModal}/>}
    <div className='flex relative bg-dark-bkg'>
      <Side setSelectedDoc={setSelectedDoc} sidebar={sidebar} setShowCreateModal={setShowCreateModal}/>
      <div className={sidebar ? 'open-right' : 'close-right'} >
    <PageHeader setShowDeleteModal={setShowDeleteModal} setSidebar={setSidebar} sidebar={sidebar}/>
    <Preview setShowMarkdown={setShowMarkdown} showMarkdown={showMarkdown}/>
   {showMarkdown &&  <textarea  className="p-4 h-screen dark:bg-dark-bkg dark:text-white w-full" value={markdown.content} onChange={(e)=>{handleMarkdownChange(e)}}></textarea>}
    {!showMarkdown && < ReactMarkdown className='preview dark:bg-dark-bkg  px-4'>{markdown.content}</ReactMarkdown>}
    </div>
    </div>
    </>
  )
}

export default Main