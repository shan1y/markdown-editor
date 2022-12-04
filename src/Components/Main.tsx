import React, {useState} from 'react'
import PageHeader from './PageHeader'
import Preview from './Preview'
import data from '../assets/data/data.json'
import ReactMarkdown from 'react-markdown'

type Data = {
  createdAt: string,
  name: string,
  content: string
}

function Main() {
  const [markdown, setMarkdown] = useState<Data[]>(data)
  const [showMarkdown, setShowMarkdown] = useState(true)

  const handleMarkdownChange =(e:React.FormEvent)=>{
   setMarkdown((e.target as HTMLFormElement).value)
  }
  return (


    <>
    <PageHeader/>
    <Preview setShowMarkdown={setShowMarkdown} showMarkdown={showMarkdown}/>
   {showMarkdown &&  <textarea  className="p-4 h-screen w-full" value={markdown[1].content} onChange={(e)=>{handleMarkdownChange(e)}}></textarea>}
    <div>
    {!showMarkdown && < ReactMarkdown className='preview px-4'>{markdown[1].content}</ReactMarkdown>}
    </div>
    </>
  )
}

export default Main