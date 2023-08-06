import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import Tab from '../../../../reusable-ui/Tab'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

function AdminTabs() {
  return (
    <AdminTabsStyled>
        <Tab Icon={<FiChevronDown />}/>
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`

`

export default AdminTabs