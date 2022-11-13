import './login.css'

import { logo } from '../../components/Logo'

export default function Login(){
  return(
    <div className='login-container'>
      <Logo/>

      <form>
        <input
          type='email'
          placeholder='Digite seu email...'
        />
        <input
          type='password'
          placeholder='*******'
          autoComplete='on'
        />
        <button type='submit'>Acessar</button>
      </form>
      
    </div>
  )
}
