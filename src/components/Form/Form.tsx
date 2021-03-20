import React from 'react'
import { IFormProps } from 'interfaces'
import { layoutStore } from 'store'


const Form: React.FC<IFormProps> = (props) => {
  const {
    user
  } = props

  const { userInfo } = layoutStore

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    layoutStore.setUser(1, event.target.value)
  }

  const clickHandler = () => {
    layoutStore.setUser(0, '1')
  }

  return (
    <div>
      <div>
        ID: {user.id}
      </div>
      <div>
        Имя: {user.name}
      </div>

      <input type='text' value={userInfo.name ?? ''} onChange={handleChange}/>
      <button onClick={clickHandler}>
        ТЫК
      </button>
    </div>
  )
}

export default Form