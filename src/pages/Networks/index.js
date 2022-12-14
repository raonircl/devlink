import { useState, useEffect } from 'react'
import './networks.css'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { MdAddLink } from 'react-icons/md'

import { db } from '../../services/firebaseConnection'
import { 
  setDoc,
  doc,
  getDoc,
 } from 'firebase/firestore'

 import { toast } from 'react-toastify'

export default function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks(){
      const docRef = doc(db, "social", "link")
      getDoc(docRef)
      .then( (snapshot) => {

        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data().linkedin)
          setInstagram(snapshot.data().instagram)
          setYoutube(snapshot.data().youtube)
        }

      })
    }

    loadLinks();

  }, [])

  function handleSave(e){
    e.preventDefault();
    
    setDoc(doc(db, "social", "link"),{
      linkedin: linkedin,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      toast.success("Salvo com sucesso!")
    })
    .catch((error) => {
      toast.error(error)
    })
  }


  return(
    <div className='admin-container'>
      <Header/>

      <h1 className='title-social'>Minhas redes sociais</h1>

      <form className='form' onSubmit={handleSave}>
        <label className='label'>Link do Linkedin</label>
        <Input
          placeholder="Digite a url do Linkedin..."
          value={linkedin}
          onChange={ (e) => setLinkedin(e.target.value) }
        />
         <label className='label'>Link do Instagram</label>
        <Input
          placeholder="Digite a url do Instagram..."
          value={instagram}
          onChange={ (e) => setInstagram(e.target.value) }
        />
         <label className='label'>Link do Youtube</label>
        <Input
          placeholder="Digite a url do Youtube..."
          value={youtube}
          onChange={ (e) => setYoutube(e.target.value) }
        />

        <button type="submit" className="btn-register">
          Salvar links <MdAddLink size={24} color="#FFF"/>
        </button>

      </form>


    </div>
  )  
}