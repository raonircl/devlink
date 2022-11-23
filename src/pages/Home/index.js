import { useState, useEffect } from 'react'
import './home.css'

import { Social } from '../../components/Social'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

import { 
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc
 } from 'firebase/firestore'

import { db } from '../../services/firebaseConnection'

export default function Home(){

  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});


  useEffect(() => {

    function loadLinks(){
      const linksRef = collection(db, "links")
      const queryRef = query(linksRef, orderBy("created", "asc"))

      getDocs(queryRef)
      .then((snapshot) => {
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

    }

    loadLinks();
  }, [])

  useEffect(() => {

    function loadSocialLinks(){
      const docRef = doc(db, "social", "link")

      getDoc(docRef)
      .then((snapshot) => {
        
        if(snapshot.data() !== undefined){
          setSocialLinks({
            linkedin: snapshot.data().linkedin,
            youtube: snapshot.data().youtube,
            instagram: snapshot.data().instagram
          })
        }

      })

    }

    loadSocialLinks();

  }, [])



    return(
      <div className='home-container'>
        <h1>Sujeito Programador</h1>
        <span>Veja meus links 👇</span>

        <main className='links'>

          { links.map((item) => (
            <section key={item.id} className='link-area' style={{ backgroundColor: item.bg }}>
              <a href={item.url} target="blank">
                <p className='link-text'>{item.name}</p>
              </a>
            </section>
          ))}  

          { links.length !== 0 && Object.keys(socialLinks).length > 0 && (
            
            <footer>

            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#FFF"/>
            </Social>

            <Social url={socialLinks?.linkedin}>
              <FaLinkedin size={35} color="#FFF"/>
            </Social>

            <Social url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#FFF"/>
            </Social>

          </footer>

          )}

        </main>

      </div>

    )
}