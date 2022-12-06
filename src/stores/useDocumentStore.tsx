import { useEffect } from 'react'
import create from 'zustand'
import {devtools, persist } from 'zustand/middleware'

interface DocumentState {
    documents: null | string
    setDocuments: (input:string) => void
}

const DocumentStore = 
      (set:any) => ({
      documents: null,
       setDocuments: (input:string) => {set((state:any)=>({documents:input}))},
       addDocument:(input:any) => set((state:any) => ({documents:[...state.documents, input]})),
       saveDocument:(input:any, documents:any, content:string) => {
        console.log(input, documents,content )
        const objIndex = documents.findIndex((obj:any)=>{
          return obj.name === input.title
        })
        documents[objIndex] = input
        set((state:any)=>({documents:documents}))
       }
      
      });
    
  
  
const useDocumentStore = create(devtools(persist(DocumentStore,{name:"documents"})))


  export default useDocumentStore;