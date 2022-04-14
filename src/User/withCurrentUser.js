import React from 'react'
import UserData from './UserData'

export const withCurrentUser = Component => props => (
  <UserData>
    {({userData}) => (
      <Component {...props} currentUser={userData} />
    )}
  </UserData>
)

export default withCurrentUser