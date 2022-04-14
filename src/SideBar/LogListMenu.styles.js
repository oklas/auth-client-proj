export default {
  list: {
    listStyleType: 'none',
    paddingLeft: 33,
    cursor: 'pointer',
    '@media (max-width: 1180px)': {
      paddingLeft: 10,
    },
    "& > li": {
      paddingLeft: 20,
      cursor: 'pointer',
      "& > i": {
        width: 10,
        height: 10,
        paddingRight: 17,
        fontSize: 12,
      }
    }
  },
  indicator: {
    top: '50%',
    left: -35,
    width: 9,
    height: 9,
    content: "''",
    display: 'block',
    position: 'absolute',
    background: '#28C552',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
  },
  iconMiddle: {
    position: 'absolute',
    left: -35,
  },
  iconMiddleCurrent: {
    '&:before': {
      position: 'absolute',
      content: '""',
      top: 6,
      left: -10,
      width: 1,
      height: 25,
      background: '#016BFC',
    },
  },
}