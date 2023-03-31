import { ChangeEvent, useState } from 'react'

import Button from '../Button'
import Input from '../Input'
import List from '../List/List'


import { UserType } from '../../stores/userStore'
import userStore from '../../stores/userStore'

const Form: React.FC = () => {
    const [newUser, setNewUser] = useState<UserType>({
        name: '',
        email: ''
      })

      const addUser = userStore((state) => state.addUser)
      const users = userStore((state) => state.users)
     
      
    //   const { addUser, users} = userStore()
      
      const handleNewUser = (key: string, event: ChangeEvent<HTMLInputElement>) => 
        setNewUser((prevState) => ({
          ...prevState,
          [key]: event.target.value,
        }))
      
      const addNewUser = () => {
        if(newUser.name && newUser.email) {
          addUser(newUser)
        }
      
        setNewUser({
          name: '',
          email: ''
        })
      }
      
        return (
          <main>
            <h1>Charpter - Zustand</h1>
            <Input props={{
              placeholder: 'Digite o seu nome',
              onChange: (e) => handleNewUser('name', e),
              value: newUser.name
            }}/>
            <Input props={{
              placeholder: 'Digite o seu email',
              onChange: (e) => handleNewUser('email', e),
              value: newUser.email
            }}/>
            <Button name="Adicionar novo usuário" props={{
              onClick: addNewUser
            }}/>   
            <List list={users}/>
          </main>
        )
}

export default Form