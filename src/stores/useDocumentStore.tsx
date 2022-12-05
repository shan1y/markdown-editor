import { useEffect } from 'react'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface DocumentState {
    documents: null | string
    setDocuments: (input:string) => void
}

const useDocumentStore = create(
    persist(
      (set) => ({
        documents: null,
       setDocuments: () =>
          set((input:string) => ({
           documents: input
          })),
      }),
      {
        name: "theme",
      }
    )
  );
  
  export default useDocumentStore;