import React from 'react'
import Login from './OktaLogin'

const Signup = ({
  ...props
}) => {
  const [done, doneUpdate] = React.useState(false)
  
  React.useEffect(() => {
    if(done) return
    
    const interval = setInterval(() => {
      const link = document.getElementsByClassName('registration-link')[0]
      if(!link || done) return
      link.click()
      doneUpdate(true)
    }, 250)
    
    return () => clearInterval(interval)
  }, [done])
  
  return (
    <Login {...props}/>
  )
}

export default Signup