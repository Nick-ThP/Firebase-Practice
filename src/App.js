import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

function App() {
  const [newName, setNewName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newAge, setNewAge] = useState("")
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge), lastName: newLastName})
  }

  const incrementAge = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const incrementedAge = {age: age + 1}
    await updateDoc(userDoc, incrementedAge);
  }

  const decrementAge = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const decrementedAge = {age: age - 1}
    await updateDoc(userDoc, decrementedAge);
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers();
  }, [])

  return (
    <div className="App">
      <input type="text" placeholder="Name" onChange={(event) => {setNewName(event.target.value)}}/>
      <input type="text" placeholder="Last name" onChange={(event) => {setNewLastName(event.target.value)}}/>
      <input type="number" placeholder="Age" onChange={(event) => {setNewAge(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return <div>
          {" "}
          <h1>Name: {user.name} {user.lastName}</h1>
          <h1>Age: {user.age}</h1>
          <button onClick={() => {incrementAge(user.id, user.age)}}>Increase Age</button>
          <button onClick={() => {decrementAge(user.id, user.age)}}>Decrease Age</button>
          <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
        </div>;
      })}
    </div>
  );
}

export default App;
