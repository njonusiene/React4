const Input = ({ firstName, lastName, age, setFirstName, setLastName, setAge }) => {
    return (
      <>
        <h1>Append table</h1>
        <div className="inputs">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="work"
            placeholder="Add First name"
            value={firstName}
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="work"
            placeholder="Add Second name"
            value={lastName}
          />
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="work"
            placeholder="Add age"
            value={age}
          />
        </div>
      </>
    )
  }
  
  export default Input
  