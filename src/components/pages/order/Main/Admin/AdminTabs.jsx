import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import Tab from '../../../../reusable-ui/Tab'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

function AdminTabs({isCollapsed, setIsCollapsed}) {

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <AdminTabsStyled>
            <Tab 
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={handleClick}
                className={isCollapsed ? 'is-active' : ''}    
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 22px;

    .is-active {
        background: ${theme.colors.background_dark};
        color: ${theme.colors.white};
        border-color: ${theme.colors.background_dark};
    }
`

export default AdminTabs