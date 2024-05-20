const Info = ({user}) => {
  const {name, surname, favPkmn} = user;
  return (
    <div className="w-1/5	flex flex-col">
      <h3>Nombre: {name}</h3>
      <h3>Apellido: {surname}</h3>
      <h3>Pokemon favorito: {favPkmn}</h3>
    </div>
  )
}

export default Info;