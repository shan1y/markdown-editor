
import sun from "../assets/icon-light-mode.svg"
import moon from "../assets/icon-dark-mode.svg"
import paper from '../assets/icon-document.svg'
import moment from 'moment'
import useThemeStore from "../stores/useThemeStore";
import useDocumentStore from "../stores/useDocumentStore"

type Props = {
    sidebar:boolean
    setShowCreateModal:Function
    setSelectedDoc:Function
}

function Side({sidebar, setShowCreateModal,setSelectedDoc}:Props) {
    let data = []
     data = useDocumentStore((state:any) => state.documents);
    const toggleTheme = useThemeStore((state:any) => state.toggleTheme);
    const setLightTheme = useThemeStore((state:any) => state.setLightTheme);
    const setDarkTheme = useThemeStore((state:any) => state.setDarkTheme);

return(
        <section className={sidebar ?' open bg-side-bkg p-27 flex flex-col justify-between' : ' bg-side-bkg close p-27 flex flex-col  justify-between'}>
            <div>
                <p className='uppercase text-white'>Markdown</p>
                <p className='uppercase text-icon-grey my-27 '>My Documents</p>
                <button onClick={()=>{setShowCreateModal(true)}}className='bg-orange text-white border-none rounded py-1.5 px-9'>+ New Document</button>
                <div className='mt-6'>
                {data && data.map((item:any,index:number) => {
                    return <div key={index} onClick={()=>{setSelectedDoc(item.name)}} className='flex mb-6 items-center cursor-pointer gap-2'>
                        <img className="w-5 h-full"src={paper} alt="document icon"></img>
                     <div className=''>
                        <p className='text-icon-grey'>{moment(item.createdAt).format("ll")}</p>
                        <p className='text-white text-sm'>{item.name}</p>
                    </div>
                    </div>
                })}  
                </div>
            </div>
          
            <div className='flex items-center gap-2'>
                <img className='dark:invert dark:contrast-200 cursor-pointer'  onClick={setDarkTheme} src={moon} alt="dark mode icon"></img>
                <div className='bg-slider-grey w-14 h-6 rounded-xl flex items-center  transition-all '>
                    <div onClick={toggleTheme} className='bg-white cursor-pointer rounded-full w-4 h-4 m-1 translate-x-8 dark:translate-x-0 transition-all'></div>
                </div>
                <img onClick={setLightTheme} className=' dark:contrast-0 dark:invert-0  cursor-pointer contrast-200 invert' src={sun} alt="light mode icon"></img>
            </div>

            

        </section>

    )
}

export default Side;