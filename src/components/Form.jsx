import { useState } from "react";
import Info from "./Info";

const Form = () => {

    const [user, setUser] = useState({name: "", age, favPkmn: ""})
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    function handleName(e){
        setUser({...user, name: e.target.value});    
    }
    function handleAge(e){
        setUser({...user, age: e.target.value});    
    }
    function handlePokemon(e){
        setUser({...user, favPkmn: e.target.value});    
    }
    function handleSubmit(e){
        e.preventDefault();
        if(
            user.name.trim().length > 3 &&
            user.age > 0 &&
            user.favPkmn.trim()
          ){
            setShow(true);
            setError(false);
          }else {
            setError(true);
            if(show === true){
                setShow(false);
            }
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="w-2/5	flex flex-col bg-blue-950 rounded-md justify-center items-center shadow-xl shadow-white">
            <div className="m-3 mt-10 w-2/3 flex">
                <label className="w-3/6 text-white">Name:</label>
                <input onChange={handleName} value={user.name} type='text' id='name' name='surname' className="w-3/6 rounded-md"/>
            </div>
            <div className="m-3 w-2/3 flex">
                <label className="w-3/6 text-white">Age:</label>
                <input onChange={handleAge} value={user.age} type='number' id='age' name='age' className="w-3/6 rounded-md"/>
            </div>
            <div className="m-3 mb-5 w-2/3 flex">
                <label className="w-3/6 text-white">Favourite pokemon:</label>
                <input onChange={handlePokemon} value={user.favPkmn} type='text' id='fav-pokemon' name='fav-pokemon' className="w-3/6 rounded-md"/>
            </div>
            <button type='submit' className="w-3/6 mb-10 mt-5 bg-black text-white px-2.5 py-1 w-20">Send</button>
        </form>
        {show && <Info user={user}/>}
        {error && (
            <p className="text-white mt-16">
                Mistake! You must enter the information correctly
            </p>
        )}
    </>
  )
}

export default Form;