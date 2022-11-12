import './home.css'

import { Social } from '../../components/Social'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Home(){
    return(
      <div className='home-container'>
        <h1>Sujeito Programador</h1>
        <span>Veja meus links 👇</span>

        <main className='links'>
          <section className='link-area'>
            <a href='#'>
              <p className='link-text'>Canal no Youtube</p>
            </a>
          </section>

          <section className='link-area'>
            <a href='#'>
              <p className='link-text'>Grupo do Telegram</p>
            </a>
          </section>

          <section className='link-area'>
            <a href='#'>
              <p className='link-text'>Fábrica de aplicativos</p>
            </a>
          </section>

          <footer>

            <Social url="http://instagram.com">
              <FaInstagram size={35} color="#FFF"/>
            </Social>
            <Social url="https://br.linkedin.com/">
              <FaLinkedin size={35} color="#FFF"/>
            </Social>
            <Social url="https://www.youtube.com/">
              <FaYoutube size={35} color="#FFF"/>
            </Social>

          </footer>

        </main>

      </div>

    )
}