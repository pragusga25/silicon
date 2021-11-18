export const SECONDARY_STYLES = {
  border: '4px solid #60648B',
  background: '#323347',
  '&:hover': {
    border: '4px solid #B9BCD9',
    cursor: 'pointer',
  },
  '&:active': { border: '4px solid #45475A' },
  '&:disabled': {
    border: '4px solid #6E719833',
    color: '#6E7198',
    cursor: 'not-allowed',
  },
} as const;
