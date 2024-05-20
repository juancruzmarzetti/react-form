const Info = ({user}) => {
  const {name, age, favPkmn} = user;
  return (
    <div className="w-1/5	flex flex-col text-white mt-16">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Favourite pokemon: {favPkmn}</h3>
    </div>
  )
}

export default Info;