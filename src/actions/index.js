//contains all the action creators
export function selectBook(book) {
  // selectBook is an action creators
  // it needs to return an action ( an object with a type property)
  //actions usually have 2 value, always a type and sometimes a payload:
  // { type: dsfsdafdsa, payload: afdsfsa }
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
