import { useState } from 'react'
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

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");


  async function handleSave(e){
    e.preventDefault();
    
    setDoc(doc(db, "social", "link"),{
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      console.log("Urls salvas com sucesso!")
    })
    .catch((error) => {
      console.log("Erro ao salvar" + error)
    })
  }


  return(
    <div className='admin-container'>
      <Header/>

      <h1 className='title-social'>Minhas redes sociais</h1>

      <form className='form' onSubmit={handleSave}>
        <label className='label'>Link do Facebook</label>
        <Input
          placeholder="Digite a url do facebook..."
          value={facebook}
          onChange={ (e) => setFacebook(e.target.value) }
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