import React, {useEffect} from 'react';
import Main from './Components/Main';
import useThemeStore from "./stores/useThemeStore";
import { applyThemePreference } from "./utils/themeUtils";
import  useDocumentStore  from './stores/useDocumentStore';
import data from '../src/assets/data/data.json'

function App() {
  const theme = useThemeStore((state:any) => state.theme);
  const setDocuments = useDocumentStore((state:any) => state.setDocuments)
 
 useEffect(()=>{
  if((!JSON.parse((localStorage.getItem("documents") || "")).state.documents)){
    setDocuments(data)}
 },[setDocuments])


  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);


  return (
    <>
   <Main/>

   </>
  );
  }

export default App;
