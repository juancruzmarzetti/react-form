const Info = ({user}) => {
  const {name, surname, favPkmn} = user;
  return (
    <>
        <h3 className="text-3xl font-bold underline">Nombre: {name}</h3>
        <h3 className="text-3xl font-bold underline">Apellido: {surname}</h3>
        <h3 className="text-3xl font-bold underline">Pokemon favorito: {favPkmn}</h3>
    </>
  )
}

export default Info;