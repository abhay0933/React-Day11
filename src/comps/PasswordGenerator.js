import { useState, useCallback, useRef } from "react";

const PasswordGenerator = () => {
   
    const [length, setLength]= useState(8);
    const [includeNumbers, setIncludeNumbers] = useState (false);
    const [includeSpecialChars, setIncludeSpeacialChars] = useState (false);
    const [pass, setPass]= useState ('');

    const generatepass  = useCallback(()=>{
         const num= "0123456789";
         const aplha= "abcdefijhklmnopqrstuvwxyz";
         const special= "@#$?/{][};"
         let validchars= aplha;

         if (includeNumbers) {
            validchars+= num;
         }

         if(includeSpecialChars) {
            validchars+= special;
         }

         let generatedpass= "";
        

         for (let i=0; i<length; i++) {
           const newpass= Math.floor(Math.random()* validchars.length);
           generatedpass+= validchars.charAt(newpass);
         }
         setPass(generatedpass);

    }, [length, includeNumbers, includeSpecialChars]);

    const copyRef= useRef(null);

    const copypass = () => {
        navigator.clipboard.writeText(pass)
        .then(() => alert("Password copied to clipboard"))
        .catch(err => console.error('Unable to copy password', err));
    }


    return(
        <>
        <h1>Random Password Generator</h1>
        <h3 ref={copyRef}>{pass}</h3>
        <div className="btn">
        <button onClick={generatepass} className="btn">Generate Password</button> 
       <button onClick={copypass}><svg xmlns="http://www.w3.org/2000/svg" height="13" width="12" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg></button>

        </div>
        <div className="length">
            <label>Password Length: 
                <input type="range" min="8" max="30" value={length} onChange={(e)=>setLength(e.target.value)}></input>
                <output>{length}</output>
            </label>
        </div>

        <div className="numChar">
            <label> Numbers: 
                <input type="checkbox" value={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.value)}></input>
            </label>
            <label> Special Characters: 
                <input type="checkbox" value={includeSpecialChars} onChange={(e)=>setIncludeSpeacialChars(e.target.value)}></input>
            </label>
        </div>
       
         
        
        </>
    );
};

export default PasswordGenerator;