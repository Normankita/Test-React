import './App.css'
import {AddFam} from './components/AddFam'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Known } from './components/Known'
import { useState } from 'react'
import useFam from './hooks/useFam'

export default function App() {
 
  const [url, setUrl]= useState("http://localhost:8000/user")

  const {data: user, setData: setUser, loading, error} = useFam(url)
      

  return (
    <div>
      <Header Head= " Norman "/>
      <main>
        <AddFam  user={user} setUser={setUser} error={error}/>
          <div className={`box ${error? "bad" : "good"}`}>
          <Known user={user} setUser={setUser} url={url} setUrl={setUrl} loading={loading} error={error}/>  
        </div>
      </main>
      <Footer/>
    </div>
  )
}