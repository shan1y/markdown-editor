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
      documentTitle:"",
      markdownContent:"",
       setDocuments: (input:string) => {set((state:any)=>({documents:input}))},
       setMarkdownContent:(input:string) => {set((state:any)=>({markdownContent:input}))},
       setDocumentTitle:(input:string) =>{set((state:any)=>({documentTitle:input}))},
       addDocument:(input:any) => set((state:any) => ({documents:[...state.documents, input]})),
       saveDocument:(input:any, documents:any) => {
        const objIndex = documents.findIndex((obj:any)=>{
          return obj.name === input.title
        })
        documents[objIndex] = input
        set((state:any)=>({documents:documents}))
       },
       deleteDocument:(input:any, documents:any) => {
       const filteredDocuments = documents.filter((obj:any)=>{
        return obj.name !== input
       })
       set((state:any)=>({documents:filteredDocuments}))
       }
      
      });
    
  
  
const useDocumentStore = create(devtools(persist(DocumentStore,{name:"documents"})))


  export default useDocumentStore;