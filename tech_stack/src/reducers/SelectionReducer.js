export default (state = null, actions) => {
  switch (actions.type) {
    case 'select_library':
      return actions.payload;
    default:
      return state;
  }
}