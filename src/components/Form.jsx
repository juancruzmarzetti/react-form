import { useState } from "react";
import Info from "./Info";

const Form = () => {

    const [user, setUser] = useState({name: "", surname: "", favPkmn: ""})
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    function handleName(e){
        setUser({...user, name: e.target.value});    
    }
    function handleSurname(e){
        setUser({...user, surname: e.target.value});    
    }
    function handlePokemon(e){
        setUser({...user, favPkmn: e.target.value});    
    }
    function handleSubmit(e){
        e.preventDefault();
        if(
            user.name.trim().length > 3 &&
            user.surname.trim().length > 5 &&
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
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input onChange={handleName} value={user.name} type='text' id='name' name='surname'/>
            <label>Surname:</label>
            <input onChange={handleSurname} value={user.surname} type='text' id='surname' name='surname'/>
            <label>Favourite pokemon:</label>
            <input onChange={handlePokemon} value={user.favPkmn} type='text' id='fav-pokemon' name='fav-pokemon' />
            <button type='submit'>Send</button>
        </form>
        {show && <Info user={user}/>}
        {error && (
            <p style={{ color: "red" }}>
                ¡Error!
                Debe colocar la información correctamente
            </p>
        )}
    </>
  )
}

export default Form;