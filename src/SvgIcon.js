import React from 'react'

export const SvgCipboardBig = ({width, height,fill, ...rest}) => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 4.19995H29C30.0609 4.19995 31.0783 4.53709 31.8284 5.13721C32.5786 5.73733 33 6.55126 33 7.39995V29.8C33 30.6486 32.5786 31.4626 31.8284 32.0627C31.0783 32.6628 30.0609 33 29 33H5C3.93913 33 2.92172 32.6628 2.17157 32.0627C1.42143 31.4626 1 30.6486 1 29.8V7.39995C1 6.55126 1.42143 5.73733 2.17157 5.13721C2.92172 4.53709 3.93913 4.19995 5 4.19995H9" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2004 13.8962H23.2004" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2004 20.4766H23.2004" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2004 26.7935H23.2004" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.0015 1H11.0015C9.89696 1 9.00153 1.71634 9.00153 2.6V5.8C9.00153 6.68366 9.89696 7.4 11.0015 7.4H23.0015C24.1061 7.4 25.0015 6.68366 25.0015 5.8V2.6C25.0015 1.71634 24.1061 1 23.0015 1Z" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgCipboard = ({width, height,fill, ...rest}) => (
  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.80163 2.3999H10.1019C10.4468 2.3999 10.7775 2.5474 11.0213 2.80995C11.2652 3.0725 11.4022 3.4286 11.4022 3.7999V13.5999C11.4022 13.9712 11.2652 14.3273 11.0213 14.5899C10.7775 14.8524 10.4468 14.9999 10.1019 14.9999H2.30027C1.95542 14.9999 1.62469 14.8524 1.38084 14.5899C1.13699 14.3273 1 13.9712 1 13.5999V3.7999C1 3.4286 1.13699 3.0725 1.38084 2.80995C1.62469 2.5474 1.95542 2.3999 2.30027 2.3999H3.60054" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.31583 6.64209H8.21664" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.31583 9.521H8.21664" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.31583 12.2847H8.21664" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.15199 1H4.25118C3.89212 1 3.60104 1.3134 3.60104 1.7V3.1C3.60104 3.4866 3.89212 3.8 4.25118 3.8H8.15199C8.51105 3.8 8.80213 3.4866 8.80213 3.1V1.7C8.80213 1.3134 8.51105 1 8.15199 1Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgInbox = ({fill, width, height, ...rest}) => (
  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 7.5H12.2L10.6 9.9375H7.4L5.8 7.5H1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.76 1.90188L1 7.5V12.375C1 12.806 1.16857 13.2193 1.46863 13.524C1.76869 13.8288 2.17565 14 2.6 14H15.4C15.8243 14 16.2313 13.8288 16.5314 13.524C16.8314 13.2193 17 12.806 17 12.375V7.5L14.24 1.90188C14.1075 1.63114 13.9033 1.4033 13.6504 1.24398C13.3974 1.08465 13.1057 1.00016 12.808 1H5.192C4.89433 1.00016 4.60261 1.08465 4.34964 1.24398C4.09666 1.4033 3.89246 1.63114 3.76 1.90188V1.90188Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

)

export const SvgCalendar = ({fill, width, height, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="22"
    {...rest}
  >
    <svg
      width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2.9999H17C18.1046 2.9999 19 3.89533 19 4.9999V18.9999C19 20.1045 18.1046 20.9999 17 20.9999H3C1.89543 20.9999 1 20.1045 1 18.9999V4.9999C1 3.89533 1.89543 2.9999 3 2.9999Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8501 12.5789L16.151 12.5789" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.24658 12.5789L6.54745 12.5789" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.04883 12.5789L11.3497 12.5789" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8501 14.6842L16.151 14.6842" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.24658 14.6842L6.54745 14.6842" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.04883 14.6842L11.3497 14.6842" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8501 16.7895L16.151 16.7895" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.24658 16.7895L6.54745 16.7895" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.04883 16.7895L11.3497 16.7895" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99976 1V5" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 1V5" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 8.99985H1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </svg>
)

export const SvgCalendarBig = ({fill, width, height, ...rest}) => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.63281 4.59995H32.6328C34.842 4.59995 36.6328 6.21172 36.6328 8.19995V33.3999C36.6328 35.3882 34.842 36.9999 32.6328 36.9999H4.63281C2.42367 36.9999 0.632812 35.3882 0.632812 33.3999V8.19995C0.632812 6.21172 2.42367 4.59995 4.63281 4.59995Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.333 21.8421L30.9347 21.8421" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.12598 21.8421L11.7277 21.8421" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.7305 21.8421L21.3322 21.8421" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.333 25.6316L30.9347 25.6316" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.12598 25.6316L11.7277 25.6316" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.7305 25.6316L21.3322 25.6316" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.333 29.4211L30.9347 29.4211" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.12598 29.4211L11.7277 29.4211" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.7305 29.4211L21.3322 29.4211" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6328 0.999939V8.19994" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.6333 0.999939V8.19994" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36.6328 15.4H0.632812" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgCalendarMini = ({fill, width, height, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="22"
    {...rest}
  >
    <svg
      width="17" height="19" viewBox='0 0 17 19' fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66667 2.69992H14.3333C15.2538 2.69992 16 3.46104 16 4.39992V16.2999C16 17.2388 15.2538 17.9999 14.3333 17.9999H2.66667C1.74619 17.9999 1 17.2388 1 16.2999V4.39992C1 3.46104 1.74619 2.69992 2.66667 2.69992Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7083 10.8421L13.6256 10.8421" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.70557 10.8421L5.62296 10.8421" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.70728 10.8421L9.62467 10.8421" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7083 12.6316L13.6256 12.6316" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.70557 12.6316L5.62296 12.6316" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.70728 12.6316L9.62467 12.6316" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7083 14.4211L13.6256 14.4211" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.70557 14.4211L5.62296 14.4211" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.70728 14.4211L9.62467 14.4211" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.1665 1V4.4" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.8335 1V4.4" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 7.79999H1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </svg>
)

export const SvgCalendarHeader = ({fill, width, height, ...rest}) => (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" transform="matrix(-1 0 0 1 17 0)" fill="#016BFC"/>
    <path d="M2.77775 1.59998H15.2222C16.204 1.59998 17 2.31632 17 3.19998V14.4C17 15.2836 16.204 16 15.2222 16H2.77775C1.79591 16 0.999969 15.2836 0.999969 14.4V3.19998C0.999969 2.31632 1.79591 1.59998 2.77775 1.59998Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.44438 1V2" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5558 1V2" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 6H1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgCalendarRetro = ({fill, width, height, ...rest}) => (
<svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.77778 3.3999H31.2222C33.3086 3.3999 35 4.92213 35 6.7999V30.5999C35 32.4777 33.3086 33.9999 31.2222 33.9999H4.77778C2.69137 33.9999 1 32.4777 1 30.5999V6.7999C1 4.92213 2.69137 3.3999 4.77778 3.3999Z" stroke="#016BFC" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.4443 2.125V4.25" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M25.5562 2.125V4.25" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.77778 0.25H30.2222C32.3086 0.25 34 0.778553 34 1.43056V9.69444C34 10.3464 32.3086 10.875 30.2222 10.875H3.77778C1.69137 10.875 0 10.3464 0 9.69444V1.43056C0 0.778553 1.69137 0.25 3.77778 0.25Z" fill="#C52828" fillOpacity="0.5"/>
</svg>

)

export const SvgSlider = ({fill, height, width, ...rest}) => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.63647 11V7.11108" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.63647 4.88889V1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 11V6" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 3.77778V1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.3635 11V8.22223" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.3635 6V1" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 7.11108H4.27273" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.36353 3.77777H8.63625" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.72702 8.22223H12.9997" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgClipboardHeader = ({fill, width, height, ...rest}) => (
  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M9.25 2.40002H10.625C10.9897 2.40002 11.3394 2.54752 11.5973 2.81007C11.8551 3.07263 12 3.42872 12 3.80002V13.6C12 13.9713 11.8551 14.3274 11.5973 14.59C11.3394 14.8525 10.9897 15 10.625 15H2.375C2.01033 15 1.66059 14.8525 1.40273 14.59C1.14487 14.3274 1 13.9713 1 13.6V3.80002C1 3.42872 1.14487 3.07263 1.40273 2.81007C1.66059 2.54752 2.01033 2.40002 2.375 2.40002H3.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.50586 6.64233H8.63086" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.50586 9.52106H8.63086" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.50586 12.2846H8.63086" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5625 1H4.4375C4.0578 1 3.75 1.3134 3.75 1.7V3.1C3.75 3.4866 4.0578 3.8 4.4375 3.8H8.5625C8.9422 3.8 9.25 3.4866 9.25 3.1V1.7C9.25 1.3134 8.9422 1 8.5625 1Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgAlarm = ({fill,  ...rest}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 18.2071V18.5H4.5V18.2071L6.35355 16.3536L6.5 16.2071V16V11C6.5 8.0953 8.03148 5.78086 10.6157 5.16644L11 5.07506V4.68V3H13V4.68V5.07538L13.3847 5.16653C15.9774 5.78083 17.5 8.10389 17.5 11V16V16.2071L17.6464 16.3536L19.5 18.2071ZM16 17.5H16.5V17V11C16.5 9.6619 16.0927 8.41673 15.3156 7.49727C14.5318 6.56974 13.392 6 12 6C10.608 6 9.4682 6.56974 8.68436 7.49727C7.90733 8.41673 7.5 9.6619 7.5 11V17V17.5H8H16ZM13.4135 20.5C13.206 21.0806 12.6488 21.5 12 21.5C11.3512 21.5 10.7939 21.0806 10.5865 20.5H13.4135Z" fill={fill ? fill : 'white'} stroke={fill ? fill : 'white'}/>
  </svg>
)

export const SvgActionDone = ({ fill, width, height, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <svg
      width="22" height="22" viewBox="0 0 22 22"  fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 20.8259C16.5228 20.8259 21 16.3246 21 10.7719C21 5.21928 16.5228 0.717957 11 0.717957C5.47715 0.717957 1 5.21928 1 10.7719C1 16.3246 5.47715 20.8259 11 20.8259Z" stroke={fill ? fill : 'white'} />
      <path fillRule="evenodd" clipRule="evenodd" d="M9.24994 13.2352L6.79994 10.772L5.98328 11.5931L9.24994 14.8774L16.2499 7.83957L15.4333 7.01849L9.24994 13.2352Z" fill={fill ? fill : 'white'} />
    </svg>
  </svg>
)

export const SvgActionBack = ({fill, width, height, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    {...rest}
  >
    <svg
      width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 21.8313C17.299 21.8313 22 17.1049 22 11.2746C22 5.44434 17.299 0.717957 11.5 0.717957C5.70101 0.717957 1 5.44434 1 11.2746C1 17.1049 5.70101 21.8313 11.5 21.8313Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.125 13.0341L6 9.89221L9.125 6.75034" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 16.8043V12.4057C16 11.7391 15.7366 11.0998 15.2678 10.6284C14.7989 10.157 14.163 9.89221 13.5 9.89221H6" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </svg>
)

export const SvgActionUp = ({fill, width, height, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <svg
      width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 22.5169C17.299 22.5169 22 17.7905 22 11.9602C22 6.12991 17.299 1.40352 11.5 1.40352C5.70101 1.40352 1 6.12991 1 11.9602C1 17.7905 5.70101 22.5169 11.5 22.5169Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.7 11.9602L11.5 7.73753L7.30005 11.9602" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.4999 16.1829V7.73753" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </svg>
)

export const SvgActionClose = ({fill, width, height, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <svg
      width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 22.5425C17.299 22.5425 22 17.8161 22 11.9858C22 6.15554 17.299 1.42915 11.5 1.42915C5.70101 1.42915 1 6.15554 1 11.9858C1 17.8161 5.70101 22.5425 11.5 22.5425Z" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.65 8.81883L8.34998 15.1528" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.34998 8.81883L14.65 15.1528" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </svg>
)

export const SvgMessage = ({ width, height, fill, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <svg
      width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.4033 0H0.59375C0.264219 0 0 0.27 0 0.6V11.4C0 11.733 0.264219 12 0.59375 12H18.4033C18.7328 12 19 11.733 19 11.4V0.6C19 0.27 18.7328 0 18.4033 0ZM16 1L9.50138 6L3 1H16ZM1 11V2L9.5 7.20753L18 2V11H1Z" fill={fill} />
    </svg>
  </svg>
)

export const SvgSave = ({ width, height, fill,  ...rest }) => (
  <svg
    width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.7778 21H3.22222C2.63285 21 2.06762 20.7659 1.65087 20.3491C1.23413 19.9324 1 19.3671 1 18.7778V3.22222C1 2.63285 1.23413 2.06762 1.65087 1.65087C2.06762 1.23413 2.63285 1 3.22222 1H15.4444L21 6.55556V18.7778C21 19.3671 20.7659 19.9324 20.3491 20.3491C19.9324 20.7659 19.3671 21 18.7778 21Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 21V12H6V21" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 1V7H15" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SvgAirplane = ({ width, height, ...rest }) => (
  <svg
    width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5938 0.385389C18.1952 -0.00312189 17.5997 -0.10892 17.0916 0.118496L0.801867 7.40149C0.273283 7.63856 -0.0465551 8.18486 0.00552744 8.76168C0.05761 9.33851 0.470134 9.81872 1.03264 9.95732L7.51684 11.5542L9.55305 18.05C9.72386 18.595 10.2177 18.9747 10.7884 19H10.8517C11.3992 19.0006 11.8934 18.6724 12.1051 18.1677L18.8925 1.8827C19.1098 1.36963 18.9914 0.775875 18.5938 0.385389ZM10.9167 18L8.55556 10.4507L1 8.59645L18 1L10.9167 18Z" fill="white" />
  </svg>
)

export const SvgClose = ({ width, height, ...rest }) => (
  <svg
    width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.6642 7.51729L14.8092 1.25117C15.0736 0.962764 15.0618 0.516707 14.7826 0.242675C14.5033 -0.031357 14.0571 -0.0347332 13.7738 0.235042L7.63842 6.49149L1.25147 0.225364C1.06862 0.0332956 0.795573 -0.0437552 0.539293 0.0243947C0.283013 0.0925447 0.084302 0.295045 0.0210007 0.552571C-0.0423006 0.810097 0.0398861 1.08165 0.235366 1.26085L6.61264 7.51729L0.235366 13.7737C-0.0344028 14.0571 -0.0310267 14.5033 0.242999 14.7826C0.517025 15.0618 0.963072 15.0736 1.25147 14.8092L7.63842 8.5431L13.7738 14.7995C14.0571 15.0693 14.5033 15.0659 14.7826 14.7919C15.0618 14.5179 15.0736 14.0718 14.8092 13.7834L8.6642 7.51729Z" fill="#DF4C43" />
  </svg>
)

export const SvgCalendarBlue = ({...rest }) => (
  <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66667 2.69989H14.3333C15.2538 2.69989 16 3.46101 16 4.39989V16.2999C16 17.2388 15.2538 17.9999 14.3333 17.9999H2.66667C1.74619 17.9999 1 17.2388 1 16.2999V4.39989C1 3.46101 1.74619 2.69989 2.66667 2.69989Z" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7084 10.8421L13.6258 10.8421" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.70544 10.8421L5.62283 10.8421" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.7074 10.8421L9.62479 10.8421" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7084 12.6316L13.6258 12.6316" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.70544 12.6316L5.62283 12.6316" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.7074 12.6316L9.62479 12.6316" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7084 14.4211L13.6258 14.4211" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.70544 14.4211L5.62283 14.4211" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.7074 14.4211L9.62479 14.4211" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.1665 1V4.4" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.8334 1V4.4" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7.79999H1" stroke="#016BFC" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgClip = ({fill, ...rest}) => (
  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.00078H14.5C14.9142 5.00078 15.25 4.66503 15.25 4.25086C15.25 3.83669 14.9142 3.50094 14.5 3.50094H6.665C6.57803 3.50105 6.49175 3.51627 6.41 3.54594C6.17 3.63093 4 4.29086 4 6.00067C4 7.4605 5.61 8.30541 6.5 8.50039H6.645H14.015C14.135 8.50039 16.965 8.60038 18.6 7.03055C19.4378 6.23745 19.939 5.15288 20 4.00089C20 2.79602 19.36 2.0611 18.585 1.32118C17.085 -0.0936583 14.745 0.00133117 14.68 0.00133117H6.03C3.86 0.00133117 0 1.38618 0 5.50072C0 7.56549 0.355 9.08532 1.55 10.2502C2.7701 11.3569 4.35282 11.9792 6 12H16C16.4142 12 16.75 11.6643 16.75 11.2501C16.75 10.8359 16.4142 10.5002 16 10.5002H6.03C4.76251 10.4881 3.54228 10.0174 2.595 9.17531C1.7 8.30541 1.5 7.14554 1.5 5.50072C1.5 1.82113 5.875 1.50116 6.05 1.50116H14.72C14.72 1.50116 16.545 1.44617 17.555 2.40606C18.025 2.85601 18.505 3.20598 18.505 4.00089C18.447 4.73893 18.1217 5.43045 17.59 5.94567C16.42 7.07055 14.125 7.00055 14.09 7.00055H6.5C6.18 6.92056 5.5 6.46561 5.5 6.00067C5.5 5.53572 6.045 5.19576 6.5 5.00078Z" fill={fill ? fill : "#ADB2BA"}/>
  </svg>
)

export const SvgEnvelope = ({fill, ...rest}) => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.4033 0H0.59375C0.264219 0 0 0.27 0 0.6V11.4C0 11.733 0.264219 12 0.59375 12H18.4033C18.7328 12 19 11.733 19 11.4V0.6C19 0.27 18.7328 0 18.4033 0ZM16 1L9.50138 6L3 1H16ZM1 11V2L9.5 7.20753L18 2V11H1Z" fill={fill ? fill : "#ADB2BA"}/>
  </svg>
)

export const SvgPen = ({fill, ...rest}) => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.2894 4.02218L14.9803 0.713029C14.6963 0.429072 14.2359 0.429072 13.952 0.713029L5.6791 8.98593C5.54277 9.1223 5.46613 9.30725 5.46613 9.50009V12.8092C5.46613 13.2108 5.79167 13.5363 6.19323 13.5363H9.50238C9.69525 13.5363 9.88017 13.4597 10.0165 13.3234L18.2894 5.05047C18.4258 4.91409 18.5024 4.72914 18.5024 4.53631C18.5024 4.34347 18.4258 4.15855 18.2894 4.02218ZM16.1186 10.9736C15.717 10.9736 15.3915 11.2991 15.3915 11.7007V16.1184C15.3915 16.6298 14.9754 17.0459 14.464 17.0459H2.88194C2.37052 17.0459 1.95448 16.6298 1.95448 16.1184V4.53636C1.95448 4.02494 2.37056 3.60891 2.88194 3.60891H7.29967C7.70123 3.60891 8.02678 3.28336 8.02678 2.8818C8.02678 2.48025 7.70123 2.1547 7.29967 2.1547H2.88194C1.56868 2.1547 0.500244 3.22314 0.500244 4.5364V16.1184C0.500279 17.4316 1.56871 18.5001 2.88194 18.5001H14.464C15.7773 18.5001 16.8457 17.4316 16.8457 16.1184V11.7006C16.8457 11.2991 16.5202 10.9736 16.1186 10.9736ZM6.91626 12.0821H9.19713L16.7429 4.53636L14.462 2.25549L6.91626 9.80126V12.0821Z" fill={fill ? fill : "#ADB2BA"}/>
  </svg>
)

export const SvgHome = ({fill}) => (
  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9524 4.36123L9.62485 3.25266V1.55746C9.62485 1.48386 9.56685 1.42363 9.49596 1.42363H9.06632C8.99543 1.42363 8.93743 1.48386 8.93743 1.55746V2.67496L5.93212 0.158925C5.68079 -0.052975 5.31989 -0.052975 5.06855 0.158925L0.0482506 4.36123C-0.00760217 4.40807 -0.0161949 4.49283 0.0289169 4.5486L0.299588 4.89656C0.3447 4.95455 0.426331 4.96347 0.482183 4.91663L1.37583 4.16941V9.27731C1.37583 9.67211 1.68302 9.99108 2.06325 9.99108H4.55514C4.69692 9.99108 4.81292 9.87063 4.81292 9.72341V6.77689L6.18776 6.78358V9.73234C6.18776 9.87955 6.30376 10 6.44554 10L8.93743 9.99331C9.31766 9.99331 9.62485 9.67434 9.62485 9.27954V4.17164L10.5185 4.91886C10.5743 4.96571 10.656 4.95678 10.7011 4.89879L10.9718 4.55083C11.0169 4.49283 11.0061 4.40807 10.9524 4.36123ZM8.93743 9.27954L6.87517 9.28623V6.33525C6.87517 6.18803 6.75917 6.06758 6.61739 6.06758L4.38328 6.06089C4.2415 6.06089 4.1255 6.18134 4.1255 6.32856V9.27954H2.06325V3.59393L5.41871 0.783472C5.46597 0.743322 5.53256 0.743322 5.57982 0.783472L8.93528 3.59393V9.27954H8.93743Z" fill={fill ? fill : "#016BFC"}/>
  </svg>
)

export const SvgProfile = ({fill, ...rest}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill={fill ? fill : 'white'}/>
  </svg>
)

export const SvgPeople1 = ({fill, ...rest}) => (
  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill={fill ? fill : 'white'}/>
  </svg>
)

export const SvgLines = ({fill, ...rest}) => (
  <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 18H27.5V15H0.5V18ZM0.5 10.5H27.5V7.5H0.5V10.5ZM0.5 0V3H27.5V0H0.5Z" fill={fill ? fill : 'white'}/>
  </svg>
)

export const SvgMeeting = ({fill, width, height, ...rest}) => (
  <svg width={width ? width : "34"} height={height ? height : "33"} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.55549 3.19995H29.4444C31.4081 3.19995 32.9999 4.63264 32.9999 6.39995V28.7999C32.9999 30.5673 31.4081 32 29.4444 32H4.55549C2.59182 32 0.999939 30.5673 0.999939 28.7999V6.39995C0.999939 4.63264 2.59182 3.19995 4.55549 3.19995Z" stroke={fill ? fill: 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.88879 2V4" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.1117 2V4" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 12H1" stroke={fill ? fill : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SvgPlan = ({fill, width, height, ...rest}) => (
  <svg width={width ? width : "35"} height={height ? height : "35"} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5417 4.875V18.4583H4.875V4.875H15.5417ZM15.5417 22.375V30.125H4.875V22.375H15.5417ZM30.125 16.5417V30.125H19.4583V16.5417H30.125ZM30.125 12.625H19.4583V4.875H30.125V12.625Z" stroke={fill ? fill : null}/>
  </svg>
)

export const SvgSubject = ({fill, width, height, ...rest}) => (
  <svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 12.75H3V14.25H10.5V12.75ZM15 6.75H3V8.25H15V6.75ZM3 11.25H15V9.75H3V11.25ZM3 3.75V5.25H15V3.75H3Z" fill= {fill? fill : 'white'}/>
  </svg>
)

export const SvgMore = ({fill, width, height, ...rest}) => (
  <svg width="4" height="25" viewBox="0 0 4 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 12.5C3.5 11.6716 2.82843 11 2 11C1.17157 11 0.5 11.6716 0.5 12.5C0.5 13.3284 1.17157 14 2 14C2.82843 14 3.5 13.3284 3.5 12.5Z" fill="white" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 2C3.5 1.17157 2.82843 0.5 2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5C2.82843 3.5 3.5 2.82843 3.5 2Z" fill="white" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 23C3.5 22.1716 2.82843 21.5 2 21.5C1.17157 21.5 0.5 22.1716 0.5 23C0.5 23.8284 1.17157 24.5 2 24.5C2.82843 24.5 3.5 23.8284 3.5 23Z" fill="white" stroke={fill ? fill : 'white'} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
export const SvgAddPerson = ({fill, width, height, ...rest}) => (
  <svg width={width ? width : "32"} height={height ? height : "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5H31.5V31.5H0.5V0.5Z" stroke={fill ? fill : 'white'}/>
    <path d="M7.49999 13.3334V13.8334H7.99999H11.5V15.5H7.99999H7.49999V16V19.5H5.83333V16V15.5H5.33333H1.83333V13.8334H5.33333H5.83333V13.3334V9.83337H7.49999V13.3334ZM24.8333 10.6667C24.8333 13.3372 22.6705 15.5 20 15.5C17.3295 15.5 15.1667 13.3372 15.1667 10.6667C15.1667 7.99618 17.3295 5.83337 20 5.83337C22.6705 5.83337 24.8333 7.99618 24.8333 10.6667ZM9.83333 24C9.83333 23.297 10.1815 22.6442 10.8385 22.0379C11.4988 21.4284 12.4373 20.9003 13.5176 20.4675C15.679 19.6016 18.2825 19.1667 20 19.1667C21.7175 19.1667 24.321 19.6016 26.4824 20.4675C27.5627 20.9003 28.5012 21.4284 29.1615 22.0379C29.8185 22.6442 30.1667 23.297 30.1667 24V26.1667H9.83333V24Z" fill="white" stroke={fill ? fill : 'white'}/>
  </svg>
)

export const SvgSeverityHigh = ({fill, width, height, ...rest}) => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41039 7.29328L0.707107 6.59L6 1.29711L11.2929 6.59L10.5896 7.29328L6.35317 3.06606L6 2.71366L5.64683 3.06606L1.41039 7.29328Z" fill="white" stroke={fill}/>
  </svg>
)

export const SvgSeverityCrit = ({fill, width, height, ...rest}) => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41039 13.2933L0.707107 12.59L6 7.29711L11.2929 12.59L10.5896 13.2933L6.35317 9.06606L6 8.71366L5.64683 9.06606L1.41039 13.2933Z" fill="white" stroke="#C52828"/>
    <path d="M1.41039 7.29328L0.707107 6.59L6 1.29711L11.2929 6.59L10.5896 7.29328L6.35317 3.06606L6 2.71366L5.64683 3.06606L1.41039 7.29328Z" fill="white" stroke="#C52828"/>
  </svg>
)

const SvgMap = {
  clipboard: SvgCipboard,
  clipboardBig: SvgCipboardBig,
  inbox: SvgInbox,
  calendar: SvgCalendar,
  calendarMini: SvgCalendarMini,
  calendarHeader: SvgCalendarHeader,
  calendarBig: SvgCalendarBig,
  clipboardHeader: SvgClipboardHeader,
  calendarRetro: SvgCalendarRetro,
  alarm: SvgAlarm,
  actionDone: SvgActionDone,
  actionBack: SvgActionBack,
  actionUp: SvgActionUp,
  actionClose: SvgActionClose,
  message: SvgMessage,
  save: SvgSave,
  airplane: SvgAirplane,
  close: SvgClose,
  calendarBlue: SvgCalendarBlue,
  slider: SvgSlider,
  clip: SvgClip,
  envelope: SvgEnvelope,
  pen: SvgPen,
  home: SvgHome,
  profile: SvgProfile,
  people1: SvgPeople1,
  lines: SvgLines,
  meeting: SvgMeeting,
  plan: SvgPlan,
  subject: SvgSubject,
  more: SvgMore,
  addPerson: SvgAddPerson,
  severityHigh: SvgSeverityHigh,
  severityCrit: SvgSeverityCrit,
}

const SvgIcon = ({
  name,
  ...rest
}) => {
  const SvgIcon = SvgMap[name] || `no such '${name}' svg`
  return (
    <SvgIcon {...rest}/>
  )
}

export default SvgIcon