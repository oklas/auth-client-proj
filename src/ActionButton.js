import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import VanillaButton from './VanillaButton'

const SvgPromote = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='fill' d="M2.5 9.375C2.13333 9.375 2 9.65625 2 10V11.875C2 12.5625 2.6 13.125 3.33333 13.125H5.33333C5.7 13.125 6 12.8438 6 12.5C6 12.1562 5.7 12 5.33333 12H3.5C3.13333 12 3 11.5938 3 11.25V10C3 9.65625 2.86667 9.375 2.5 9.375ZM3 3.75C3 3.40625 3.13333 3 3.5 3H5.33333C5.7 3 6 2.84375 6 2.5C6 2.15625 5.7 1.875 5.33333 1.875H3.33333C2.6 1.875 2 2.4375 2 3.125V5C2 5.34375 2.13333 5.625 2.5 5.625C2.86667 5.625 3 5.34375 3 5V3.75ZM12.6667 1.875H10.6667C10.3 1.875 10 2.15625 10 2.5C10 2.84375 10.3 3 10.6667 3H12.5C12.8667 3 13 3.15625 13 3.5V5C13 5.34375 13.1333 5.625 13.5 5.625C13.8667 5.625 14 5.34375 14 5V3.125C14 2.4375 13.4 1.875 12.6667 1.875ZM13 11.5C13 11.8438 12.8667 12 12.5 12H10.6667C10.3 12 10 12.1562 10 12.5C10 12.8438 10.3 13.125 10.6667 13.125H12.6667C13.4 13.125 14 12.5625 14 11.875V10C14 9.65625 13.8667 9.375 13.5 9.375C13.1333 9.375 13 9.65625 13 10V11.5ZM8 6.5C6.89333 6.5 7 6.4625 7 7.5C7 8.5375 6.89333 8.5 8 8.5C9.10667 8.5 9 8.5375 9 7.5C9 6.4625 9.10667 6.5 8 6.5Z" fill="#016BFC"/>
  </svg>
)

const SvgComplete = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='fill' fillRule="evenodd" clipRule="evenodd" d="M5.24994 9.45006L2.79994 7.00006L1.98328 7.81672L5.24994 11.0834L12.2499 4.08339L11.4333 3.26672L5.24994 9.45006Z" fill="#016BFC"/>
  </svg>
)

const SvgDelete = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='blue' d="M11.5 22C17.299 22 22 17.299 22 11.5C22 5.70101 17.299 1 11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22Z" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.65 8.35001L8.34998 14.65" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.34998 8.35001L14.65 14.65" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SvgCalendar = () => (
  <svg
    width="17" height="19" viewBox='0 0 17 19' fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66667 2.69992H14.3333C15.2538 2.69992 16 3.46104 16 4.39992V16.2999C16 17.2388 15.2538 17.9999 14.3333 17.9999H2.66667C1.74619 17.9999 1 17.2388 1 16.2999V4.39992C1 3.46104 1.74619 2.69992 2.66667 2.69992Z" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7083 10.8421L13.6256 10.8421" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.70557 10.8421L5.62296 10.8421" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.70728 10.8421L9.62467 10.8421" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7083 12.6316L13.6256 12.6316" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.70557 12.6316L5.62296 12.6316" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.70728 12.6316L9.62467 12.6316" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7083 14.4211L13.6256 14.4211" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.70557 14.4211L5.62296 14.4211" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.70728 14.4211L9.62467 14.4211" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.1665 1V4.4" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.8335 1V4.4" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7.79999H1" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const SvgEmpty = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  </svg>
)

const SvgMap = {
  promote: SvgPromote,
  complete: SvgComplete,
  delete: SvgDelete,
  calendar: SvgCalendar,
  empty: SvgEmpty
}

const styles = {
  button: {
    display: 'inline-block',
    width: 22,
    height: 22,
    marginRight: 15,
    textAlign: 'center',    
    verticalAlign: 'middle',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  circle: {
    borderRadius: '50%',
    border: '1px solid #016BFC',
  },
  active: {
    backgroundColor: '#016BFC',
    cursor: 'pointer',
    '& path': {
      stroke: '#fff',
    },
    '& .blue': {
      stroke: "#016BFC",
    },
    '& .fill': {
      fill: '#fff',
    }
  },
  disabled: {
    cursor: 'default !important',
    '&$circle': {
      border: '1px solid #d7dade',
    },
    '& path': {
      stroke: '#d7dade',
    },
    '& .blue': {
      stroke: "#d7dade",
    },
    '& .fill': {
      fill: '#d7dade',
    }
  },
}

const ActionButton = ({
  icon,
  classes,
  active,
  disabled,
  ...props
}) => {
  const SvgBtn = SvgMap[icon] || SvgMap['empty']
  return (
    <VanillaButton
      className={classNames(
        classes.button,
        !(icon==='delete' || icon==='calendar') ? classes.circle : null,
        active ? classes.active : null,
        disabled ? classes.disabled : null,
      )}
      disabled={disabled}
      {...props}
    >
      <SvgBtn />
    </VanillaButton>
  )}

export default injectSheet(styles)(ActionButton)
