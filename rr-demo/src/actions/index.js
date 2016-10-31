export const SHOW_MODAL = 'SHOW_MODAL';

export function showModalDelete(id, name) {
  return {
    type: SHOW_MODAL,
    id,
    username: name
  };
}
