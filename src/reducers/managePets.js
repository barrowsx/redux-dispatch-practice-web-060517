export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      if(action.pet.name !== undefined && action.pet.species !== undefined && action.pet.id !== undefined){
        return {...state, pets: [...state.pets, action.pet]}
      } else {
        return state
      }
    case "REMOVE_PET":
      return {...state, pets: state.pets.filter(element => {
        return element.id !== action.id
      })}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  container.innerHTML = `<ul><li>Splash</li></ul>`
  // this test is awful btw
}
