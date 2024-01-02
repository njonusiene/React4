import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import Table from './components/Table'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState([
    { firstName: 'Jonas', lastName: 'Rimkus', age: 54 },
    { firstName: 'Vestina', lastName: 'Petronytė', age: 31 },
    { firstName: 'Marius', lastName: 'Dulinskas', age: 23 },
  ])

  //Pridedam eilutę
  const addValue = () => {
    const newData = [...data, { firstName, lastName, age }]
    setData(newData)

    // Išsivalom input
    setFirstName('')
    setLastName('')
    setAge('')
  }

  //Pirmos eilutės ištrynimas
  const removeFirst = () => {
    const newData = [...data]
    newData.shift()
    setData(newData)
  }

  //Paskutinės eilutės ištrynimas
  const removeLast = () => {
    const newData = [...data]
    newData.pop()
    setData(newData)
  }

  return (
    <>
      <Input
        firstName={firstName}
        lastName={lastName}
        age={age}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setAge={setAge}
      />
      <Button addValue={addValue} removeFirst={removeFirst} removeLast={removeLast} />
      <Table data={data} />
    </>
  )
}

export default App
