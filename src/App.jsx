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
    // Tikrinam validacija
    if (firstName.trim() === '' || lastName.trim() === '' || age.trim() === '') {
      alert('Visi laukai turi būti užpildyti! :)')
      return
    }

    const ageValue = parseInt(age, 10)
    if (isNaN(ageValue) || ageValue <= 0) {
      alert('Neteisingai įvedėte amžių!')
      return
    }
  
    const newData = [...data, { firstName, lastName, age }]
    setData(newData)
  
    // Išvalome input
    setFirstName('')
    setLastName('')
    setAge('')

    alert('Duomenys įvesti sėkmingai!')
  }

  //Pirmos eilutės ištrynimas
  const removeFirst = () => {
    const newData = [...data]
    newData.shift()
    setData(newData)
    alert('Pirma eilutė ištrinta sėkmingai!')
  }

  //Paskutinės eilutės ištrynimas
  const removeLast = () => {
    const newData = [...data]
    newData.pop()
    setData(newData)
    alert('Paskutinė eilutė ištrinta sėkmingai!')
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
