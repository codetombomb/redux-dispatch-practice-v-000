export let state;

export function managePets(state = { pets:[] }, action){
  switch(action.type){
    
    case "ADD_PET":
      const petsCopy = [...state.pets];
      petsCopy.push(action.pet)
      return { pets: petsCopy }
      
    case "REMOVE_PET":
      const petsCopy = [...state.pets];
      const newPets = petsCopy.filter(pet => pet.id !== action.pet.id)
      return { pets: newPets }
      
    default: 
      return state
  }
}

export function dispatch(){
}

export function render(){

}
