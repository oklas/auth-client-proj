import React from 'react'
import {Personnel} from '../User'

const PersonnelContext = React.createContext(new Personnel({}))

export default PersonnelContext