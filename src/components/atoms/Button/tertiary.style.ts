export const TERTIARY_STYLES = {
  background: '#323347',
  color: '#6E7198',
  '&:hover': {
    background: '#323347',
    boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.3)',
    color: '#B9BCD9',
    cursor: 'pointer',
  },
  '&:active': {
    background: '#323347',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    background: '#323347',
    boxShadow: 'none',
    color: '#6E7198',
  },
} as const;
