import React from 'react'
import {itemsPerPage} from '../consts'

const Pages = ({
  page,
  totalItems,
}) => (
  <span style={{color: 'rgb(24, 47, 79)'}}>
    {(page-1) * itemsPerPage + 1} {" - "}
    {page*itemsPerPage < totalItems ?
    page*itemsPerPage : totalItems} {" "}
    of {totalItems}
  </span>
)

export default Pages