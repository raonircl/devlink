import './home.css'

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

        </main>

      </div>

    )
}