import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, updateUsername, deleteUser } from './redux/Users'

function App() {

  const users = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [newUsername, setNewUsername] = useState("")

  return (
    <>
      <div className='app'>
        <div className='addUser'>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name..' />
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Enter Username..' />
          <button onClick={() => {
            dispatch(
              addUser({id: users.length, name, username})
              )
            console.log(users.length)
          }}>
            Add User
          </button>
        </div>
        <div className='displayUsers'>
          {
            users.map((user) => {
              return(
                <div className='userBox' key={user.id}>
                  <h1>{user.name}</h1>
                  <h2>{user.username}</h2>
                  <input type="text" onChange={(e) => setNewUsername(e.target.value)} placeholder='Change Username...' />
                  <button onClick={() => {
                    dispatch(updateUsername({id: user.id, username: newUsername}))
                  }}>
                    Update Username
                  </button>
                  <br />
                  <br />
                  <button onClick={() => {dispatch(deleteUser({id: user.id}))}}>Delete User</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
