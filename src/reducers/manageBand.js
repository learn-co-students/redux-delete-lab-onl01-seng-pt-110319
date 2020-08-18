import uuid from 'uuid'
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      // const band = { id: Math.random(), name: action.name }
      // return { ...state, bands: [...state.bands, band] }
    const band = {
      id: uuid(),
      name: action.name
    }
    return { bands: state.bands.concat(band) }

      // return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };


    //  return { bands: state.bands.filter(band => band.id !== action.payload)}
      default:
      return state;
  }
};
