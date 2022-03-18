const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
    border: '1px solid ' + theme.palette.background.border,
    padding: '24px',
    margin: '24px 0',
  },
  textContainer: {
    flexGrow: '1',
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: '16px',
    fontWeight: '700',
  },
  text: {
    color: theme.palette.text.primary,
    fontSize: '16px',
    fontWeight: '400',
  },
  btn: {
    textDecoration: 'none',
    backgroundColor: theme.palette.text.primary,
    fontWeight: '700',
    borderRadius: '4px',
    textTransform: 'none',
    color: theme.palette.text.flipped,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 12px',
    [theme.breakpoints.down('md')]: {
      padding: '12px 24px',
      marginTop: '24px',
      width: '100%',
    },
    '&:Hover': {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.flipped,
    },
  },
});

export default styles;
