import './App.css';
import UserList from './thi'
function App() {
  const [init,name,changeName ,deleteUser,listUser] = UserList()
  return (
    <div className="App">
      <p>学生一覧：[{init.map(name => name).join(',')}]</p>
      <p>削除値を入力してください。</p>
      <input  value={name} onChange={changeName} />
      <div><button onClick={deleteUser} >確定</button></div>
      <p>削除する名前： {name}</p>
      <p>新しい一覧：[{listUser.map(name => name).join(',')}]</p>
    </div>
  );
}

export default App;