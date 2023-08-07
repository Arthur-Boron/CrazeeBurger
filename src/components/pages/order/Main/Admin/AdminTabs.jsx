import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import Tab from '../../../../reusable-ui/Tab'
import AdminTabContext from '../../../../../context/AdminTabContext'
import getTabsConfig from '../../../../../config/TabsConfig'

function AdminTabs() {

    const {isCollapsed, setIsCollapsed, selectedTab, setSelectedTab} = useContext(AdminTabContext)

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    const handleSelectedTab = (tabName) => {
        setIsCollapsed(false)
        setSelectedTab(tabName)
    }

    const tabs = getTabsConfig(selectedTab)

    return (
        <AdminTabsStyled>
            <Tab
                key= 'collapse'
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => handleClick()}
                className={isCollapsed ? 'is-active' : ''}
            />
            {
                tabs.map((tab) => {
                    return <Tab
                        key={tab.key}
                        Icon={tab.Icon}
                        className={tab.className}
                        Label={tab.Label}
                        onClick={() => handleSelectedTab(tab.key)}
                    />
                })
            }
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

    button {
        margin-left: 1px;
    }
`

export default AdminTabs