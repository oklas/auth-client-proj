export default {
  mainSidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: '100%',
    width: 306,
    backgroundColor: '#3D5677',
    transition: 'width 0.3s ease-in-out',
    zIndex: 200,
  },
  mainSidebarHide: {
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: '100%',
    width: 60,
    backgroundColor: '#3D5677',
    transition: 'width 0.3s ease-in-out',
    zIndex: 200,
  },
  sidebar: {
    paddingBottom: 10,
    zIndex: 1,
  },
  sidebarMenu: {
    cursor: 'pointer',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: 306,
    '&>li.header': { overflow: 'hidden' },
    '&:hover': {
      overflow: 'visible',
    },
  },
  sidebarMenuHide: {
    cursor: 'pointer',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: 25,
    '&>li.header': { overflow: 'hidden' },
    '&:hover': {
      overflow: 'visible',
    },
    '& > li > ul': {
      display: 'none',
    },
  },
  header: {
    '@media (min-width: 768px)': {
      display: 'none !important',
      transform: 'translateZ(0)',
      position: 'relative',
    },
  },
}