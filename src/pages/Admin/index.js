import { useState, useEffect } from 'react'
import { Header } from "../../components/header"
import './admin.css'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'

import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'

import { db } from '../../services/firebaseConnection'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc
} from 'firebase/firestore'

import { toast } from 'react-toastify'

export default function Admin(){
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");

  const [links, setLinks] = useState([])

  useEffect(() => {

    const linksRef = collection(db, "links")
    const queryRef = query(linksRef, orderBy("created", "asc"))

    onSnapshot(queryRef, (snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().background,
          color: doc.data().color
        })  
      })

      setLinks(lista);

    })

  }, [])

  function handleRegister(e){
    e.preventDefault();
    
    if(nameInput === '' || urlInput === ''){
      toast.warn("Preencha todos os campos!");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      background: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
    .then(() =>{
      setNameInput('');
      setUrlInput('');
    })
    .catch((error) => {
      toast.error('Ops, erro ao salvar link!');
    })

  }

  function handleDeleteLink(id) {
    const docRef = doc(db, "links", id)
    deleteDoc(docRef)
  }

  
  return(
    <div className="admin-container">
      <Header/>

      <Logo/>

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do link</label>
        <Input
          placeholder="Nome do link"
          value={nameInput}
          onChange={ (e) => setNameInput(e.target.value) }
        />
        
        <label className="label">Url do link</label>
        <Input
          type="url"
          placeholder="Digite a url..."
          value={urlInput}
          onChange={ (e) => setUrlInput(e.target.value) }
        />

        <section className="container-colors">
          <div>
            <label className="label right">Fundo do link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={ (e) => setBackgroundColorInput(e.target.value) }
            />
          </div>

          <div>
            <label className="label right">Cor do link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={ (e) => setTextColorInput(e.target.value) }
            />
          </div>
        </section>

        { nameInput !== '' && (
          <div className='preview'>
            <label className='label'>Veja como está ficando</label>
            <article className='list' style={{ marginTop: 8, backgroundColor: backgroundColorInput }}>
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF"/>
        </button>

      </form>

      <h2 className="title">
        Meus links
      </h2>

    { links.map( (item, index) => (
      <article
        key={index} 
        className="list animate-top"
        style={{ backgroundColor: item.bg, color: item.color }}
        >
        <p>{item.name}</p>
        <div>
          <button className="btn-delete" onClick={ () => handleDeleteLink(item.id) }>
            <FiTrash2 size={18} color="#FFF"/>
          </button>
        </div>
      </article>
    ) )}


    </div>
  )
}
