export const PRIMARY_STYLES = {
  background: 'linear-gradient(180deg, #5561FF 0%, #3643FC 100%)',
  '&:hover': {
    background: 'linear-gradient(180deg, #6B75FF 0%, #535FFF 100%)',
    cursor: 'pointer',
  },
  '&:active': {
    background: 'linear-gradient(180deg, #4B4FA0 0%, #44488B 100%)',
  },
  '&:disabled': {
    background: '#6E719833',
    color: '#6E7198',
    cursor: 'not-allowed',
  },
} as const;
