import React from 'react'
import {compose, mapProps } from 'recompose'
import {withAuth} from '../auth'
import {UserData} from '../User'

const OktaUserActualizator = ({
  userOkta,
}) => (
  <UserData>
    {({userData, userUpdate}) => {
      if(!userOkta) return null
      if( userData.firstName != userOkta.given_name ||
        userData.lastName != userOkta.family_name
      ) {
        userUpdate({variables: {record: {
          _id: userData._id,
          firstName: userOkta.given_name,
          lastName: userOkta.family_name,
        }}})
      }
      return null
    }}
  </UserData>
)

const enhance = compose(
  withAuth,
  mapProps(({userinfo}) => ({userOkta: userinfo})),
)

export default enhance(OktaUserActualizator)