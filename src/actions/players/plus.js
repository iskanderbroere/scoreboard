// export const PLUS_ONE = 'PLUS_ONE'

// export default (plusOne) => {
//   return {
//     type: PLUS_ONE,
//     payload: plusOne
//   }
// }
export const plusOne = (playerId) => { 
  return {
    type: 'PLUS_ONE',
    payload: playerId 
  }
}