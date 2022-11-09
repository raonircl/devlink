
export default function App() {
  return(
    <div>
      <h1>Meu Primeiro Dia</h1>
      <br/>    
      <Aluno name="Raoni Cerqueira" dev="FullStack"/>
      <Aluno name="Tatiana Lima" dev="Frontend"/>
    </div>

  )    
}

function Aluno({ name, dev }) {
  return(
    <>
      <h2>Bem vindo {name} ao seu primeiro dia!</h2>
      <h3 
      style={{
        color: "green"
      }}
      >
        {dev}
      </h3>
      <p>Veja aqui os seus materias</p>
      <button>
        <strong>Clique aqui!</strong>
      </button>
    </>
  )  
}
