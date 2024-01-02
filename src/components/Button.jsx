const Button = ({addValue, removeFirst, removeLast}) => {
 
    return (
        <div className="buttons">
            <button id="add" onClick={addValue} > Pridėti</button>
            <button id="removeFirst" onClick={removeFirst}>Ištrinti pirmą</button>
            <button id="removeLast" onClick={removeLast}>Ištrinti paskutinį</button>
        </div>
    )
  }
  
  export default Button