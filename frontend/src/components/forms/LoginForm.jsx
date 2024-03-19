import { useEffect, useState } from 'react'
import Input from './inputs/Input'
import './Form.css'
import { useAuth } from '../../contexts/authContext'
import Button from './buttons/Button'
import { useNavigate } from 'react-router-dom'

function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: 'flexhiro@sensei.jap',
    password: '123456'
  })
  const navigate = useNavigate()

  const { state: { user, jwt, error }, login } = useAuth()

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <form className='form-container'>
        <h2>Se connecter</h2>
        <Input
          name='identifier'
          type='email'
          label='Email : '
          placeholder='Entrez votre Email'
          value={formData.identifier}
          onChange={handleChange}
          required
        />
        <Input
          name='password'
          type='password'
          label='Mot de passe : '
          placeholder='Entrez votre mot de passe'
          value={formData.password}
          onChange={handleChange}
          required
        />
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
        <Button type='submit' onClick={handleSubmit}>
          Se connecter
        </Button>
      </form>
    </>
  )
}

export default LoginForm
