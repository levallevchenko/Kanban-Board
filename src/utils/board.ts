
export const getColumnIconName = (columnType: string) => {
  switch (columnType) {
    case 'backlog':
      return 'ic_paperclip';
    case 'in-progress':
      return 'ic_play_button'
    case 'done':
      return 'ic_check';
    case 'delivered':
      return 'ic_check';
    default:
      return 'ic_paperclip';
  }
}
