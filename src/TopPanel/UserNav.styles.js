export default {
  userAvatar: {
    padding: '5px 8px',
    margin: '0 5px',
    borderRadius: '50%',
    border: 'solid 1px #ffffff',
    fontSize: 24,
    color: '#ffffff',
  },
  rightPosition: {
    top: 10,
    marginTop: 0,
    borderRadius: 0,
    '&.dropdown-menu': {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 61,
      width: 124,
      padding: [0, 10],
      background: '#fff',
      boxShadow: '4px 4px 74px rgba(16, 31, 50, 0.2)',
    },
    '& li:last-child': {
      border: 'none',
    }
  },
  menuItem: {
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #f4f4f4',
    listStyle: 'none',
  },
  arrow: {
    position: 'absolute',
    top: 6,
    left: 33,
    width: 5,
    height: 5,
    marginRight: 20,
    borderTop: '1px solid #ADB2BA',
    borderLeft: '1px solid #ADB2BA',
  },
  avatar: {
    position: 'relative',
    display: 'inline-block',
    width: 32,
    height: 32,
    textAlign: 'center',
    lineHeight: '32px',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    color: '#fff',
    borderRadius: '50%',
    background: '#56CCF2',
    boxShadow: '0px 2px 6px rgba(47, 83, 151, 0.1)',
  },
  dropdown: {
    height: 60,
    width: 78,
    flexGrow: 0,
    flexShrink: 0,
    textAlign: 'center',
    lineHeight: '60px',
    borderLeft: '1px solid #EAEAEA',
    '& a': {
      position: 'relative',
    }
  },
}