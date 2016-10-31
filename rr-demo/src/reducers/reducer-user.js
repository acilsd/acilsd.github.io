import { SHOW_MODAL } from '../actions';

// let tempData = [];
//
// for (let i = 1; i < 10; i++) {
//   tempData.push({
//     id: i,
//     username: 'John ' + i,
//     job: 'Test' + i
//   });
// }
//
// const initialState = {
//   users: tempData
// };

export default function modal(state = {}, action) {
  let new_state;
  switch (action.type) {
  case SHOW_MODAL:
    new_state = JSON.parse(JSON.stringify(state));
    new_state.modal = new_state.modal ? new_state.modal : {};
    new_state.modal.list_delete = {
      show: true,
      id: action.id,
      username: action.username
    };
    return new_state;



  default:
    return state;
  }
}
