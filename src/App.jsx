import Hello from './components/Hello'
import { useState } from 'react';

export default function App() {

  // states declaration

  const [password , setpassword] = useState("")
  const [length , setlength]= useState(8)
  const[numAllow , setnumAllow] = useState(false)
  const[specialCharAllow , setspecialCharAllow] = useState(false)

  let char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
  let num = "1234567809"
  let specialChar = "`~!@#$%^&*(){}[];':"

  // password generator function

   let passwordGenerator = () => {
    let finalChar = char

    if(numAllow == true) finalChar += num
    if(specialCharAllow == true) finalChar += specialChar

   let newpassword = ""

  for(let i=0; i<length; i++){
  let randInt = Math.floor(Math.random() * finalChar.length)
  let randPass = finalChar.charAt(randInt)
  newpassword += randPass
  }
  setpassword(newpassword)
  return newpassword
  }

  //copy password in clipboard function

  const copyFunction = () => {
   navigator.clipboard.writeText(password)
   .then(() => {
    alert("pasword copied successfully")
   }).catch(() => {
    alert("copying failed")
   })
  }

  // jsx part

  return (
  <div>

    <button onClick={passwordGenerator}
    type="button" > 
    generate pass</button>

    <div > 
     <p >generated password = {password}</p>

     <button onClick={copyFunction}>copy</button>
    </div>

     <input type="range"
      min={8}
      max={30}
      value={length}
      onChange={(e)=> setlength(Number(e.target.value))}
     />  

     <p >password length = {length}</p>

    <label htmlFor="">
    <input type='checkbox'
      checked = {numAllow}
      onChange={(e) => setnumAllow (e.target.checked)}    
    /> number Allowed 
    </label> <br/>

    <label htmlFor="">
     <input type='checkbox'
     checked = {specialCharAllow}
      onChange={(e) => setspecialCharAllow(e.target.checked)}    
    /> special Char Allowed
      </label>
  </div>
 
  );
}
