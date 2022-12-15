
import create from 'zustand'
import Swal from "sweetalert2"
import { devtools, persist } from 'zustand/middleware'


interface Document {
  createdAt:number
  name: string
  content: string
}

interface State {
  documents: Document[];
  documentTitle: string;
  markdownContent: string;
}

const DocumentStore =
  (set: Function) => ({
    documents: null,
    documentTitle: "",
    markdownContent: "",
    setDocuments: (input: string) => { set(() => ({ documents: input })) },
    setMarkdownContent: (input: string) => { set(() => ({ markdownContent: input })) },
    setDocumentTitle: (input: string) => { set(() => ({ documentTitle: input })) },
    addDocument: (input: Document) => set((state: State) => ({ documents: [...state.documents, input] })),
    saveDocument: (input: Document, documents: Document[]) => {
      const objIndex = documents.findIndex((obj) => {
        return obj.name === input.name
      })
      documents[objIndex] = input
      set(() => ({ documents: documents }))
    },
    deleteDocument: (input: string, documents: Document[]) => {
      const filteredDocuments = documents.filter((obj) => {
        return obj.name !== input
      })
      set(() => ({ documents: filteredDocuments }))
      Swal.fire({
        icon: 'success',
        title: 'Document successfully deleted',
        showConfirmButton: false,
        timer: 1500
      })
    }
  });


const useDocumentStore = create(devtools(persist(DocumentStore, { name: "documents" })))


export default useDocumentStore;

//type DocumentStoreState = {
//   documents: Document[],
//   documentTitle: string,
//   markdownContent: string,
// }

// type DocumentFunctions = {
//   setDocuments: (input: string) => Document[]
//   setMarkdownContent: (input: string) => void
//   setDocumentTitle: (input: string) => void
//   addDocument: (input: string) => void
//   saveDocument: (input: string, documents: Document[]) => void
//   deleteDocument: (input: string, documents: Document[]) => void
// }