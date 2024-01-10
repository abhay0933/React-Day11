import { useState, useCallback } from "react";

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


    return(
        <>
        <h1>Random Password Generator</h1>
        <h3>{pass}</h3>
        <div className="btn">
        <button onClick={generatepass} className="btn">Generate Password</button> 
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