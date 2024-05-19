const Info = ({user}) => {
  const {name, surname, favPkmn} = user;
  return (
    <>
        <h3>Nombre: {name}</h3>
        <h3>Apellido: {surname}</h3>
        <h3>Pokemon favorito: {favPkmn}</h3>
    </>
  )
}

export default Info;