import { useState ,useCallback , useRef , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed ] = useState(false)
  const [password,setPassword] = useState("")

  //let inputRef = useRef(null)
  
  let passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{

    let pass=""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed){
      str+="0123456789"
    }

    if(charAllowed){
      str+="!@#$%^&*()_+"
    }

    for(let i=1; i<=length; i++){

      const char =Math.floor(Math.random()*str.length +1 )
      pass+=str.charAt(char)


    }

    setPassword(pass)
    //inputRef.current.value = pass


  } , [length , numberAllowed , charAllowed])


  const copyPasswordToClipboard = () =>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }


  useEffect(()=>{
    generatePassword()
  } , [length , numberAllowed , charAllowed])

  return (
    <>
    <div className=' bg-slate-800 text-blue-500 py-2'>
          <div className='flex justify-center'>

        
              <div>
                <h1 className=' text-white mb-3 text-center'>Password Generator</h1>

                <div className='flex shadow rounded-lg overflow-hidden'>
                  <input  ref={passwordRef} type="text"  placeholder='password' value={password} readOnly className='outline-none py-1 px-3'/>
                  <button   onClick={copyPasswordToClipboard} className='bg-blue-500 outline-none text-white  shrink-0  px-3 py-0.5'>copy</button>
                </div>

                
                
              </div >

          </div>

          <div className='flex justify-center items-center gap-x-1 mt-3'>

            <input onChange={(e)=>setLength(e.target.value)} type="range" min={6} max={20} value={length} className='cursor-pointer'  name="" id=" "  />
            <label htmlFor="length" className='text-white'>length : {length}</label>


            <input type="checkbox" 
            defaultChecked={numberAllowed} 
            onChange={()=>{ 
              setNumberAllowed(prev => !prev)
            }}
            name="" id="" />
            <label htmlFor="number" className='text-white'>Numbers</label>


            <input type="checkbox" 
            defaultChecked={charAllowed} 
            onChange={()=>{ 
              setCharAllowed(prev => !prev)
            }}
            name="" id="" />
            <label htmlFor="char" className='text-white'>Characters</label>

          </div>

    </div>

          

    
      
    </>
  )
}

export default App
