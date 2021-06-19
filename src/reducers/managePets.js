export let state;

export function managePets(state = { pets:[] }, action){
  switch(action.type){
    case "ADD_PET":
      //make a copy of the pets array to not mutate original state.
      const petsCopy = [...state.pets];
      
      //push the new pet into the pets copy array.
      petsCopy.push(action.pet)
      
      // return the new state with the pets key set to the pets copy 
      return { pets: petsCopy }
    case "REMOVE_PET":
      //make a copy of the pets array to not mutate original state.
      // find index of pet using indexOf
      // save pet object to variable 
      // Splice out the pet object from pets copy 
      // return petsCopy
      
      
      
    default: 
      return state
  }
}

export function dispatch(){
}

export function render(){

}
