
import create from 'zustand'
import Swal from "sweetalert2"
import {devtools, persist } from 'zustand/middleware'


interface Document {
 createdAt:string
  name: string
 content: string
}

type initialState = {
  documents:Document[],
  documentTitle:string,
  markdownContent:string,
 
}

type SetState = { 
  setDocuments: (input:string) => void
  setMarkdownContent:(input:string) => void
  setDocumentTitle:(input:string) => void
  addDocument:(input:string) => void
  saveDocument:(input:string, documents:Document[]) => void
deleteDocument:(input:string, documents:Document[]) => void
 }

const DocumentStore = 
      (set:any) => ({
      documents: null,
      documentTitle:"",
      markdownContent:"",
       setDocuments: (input:string) => {set(()=>({documents:input}))},
       setMarkdownContent:(input:string) => {set(()=>({markdownContent:input}))},
       setDocumentTitle:(input:string) =>{set(()=>({documentTitle:input}))},
       addDocument:(input:any) => set((state:any) => ({documents:[...state.documents, input]})),
       saveDocument:(input:any, documents:Document[]) => {
        const objIndex = documents.findIndex((obj)=>{
          return obj.name === input.title
        })
        documents[objIndex] = input
        set(()=>({documents:documents}))
       },
       deleteDocument:(input:string, documents:Document[]) => {
       const filteredDocuments = documents.filter((obj)=>{
        return obj.name !== input
       })
       set(()=>({documents:filteredDocuments}))
       Swal.fire({
        icon: 'success',
        title: 'Document successfully deleted',
        showConfirmButton: false,
        timer: 1500
      })
       }
      });
    

const useDocumentStore = create(devtools(persist(DocumentStore,{name:"documents"})))


  export default useDocumentStore;