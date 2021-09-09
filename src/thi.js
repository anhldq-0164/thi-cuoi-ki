import { useState } from 'react';

function UserList() {
  const  init = ["Huyen","Hoa","Hung","Long"]
  const  [ lists , setLists] = useState(init)
  const [name, setName] = useState('')
  const changeName = (e) => {
    setName(e.target.value)
  }
  const deleteUser = () =>{
    let dataUser = [].concat(lists)
    if (dataUser.findIndex(value => value === name) !== -1){
      dataUser.splice(dataUser.findIndex(value => value === name), 1)
    }
    setLists(dataUser)
  }
 
  return [init, name,changeName ,deleteUser,lists]
}

export default UserList;