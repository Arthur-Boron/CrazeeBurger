import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import Tab from '../../../../reusable-ui/Tab'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
import AdminTabContext from '../../../../../context/AdminTabContext'

function AdminTabs() {

    const {isCollapsed, setIsCollapsed, selectedTab, setSelectedTab} = useContext(AdminTabContext)

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    const handleSelectedTab = (tabName) => {
        setIsCollapsed(false)
        setSelectedTab(tabName)
    }

    const tabsConfig = [
        {
            key: 'collapse',
            Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
            onClick: () => handleClick(),
            className: isCollapsed ? 'is-active' : ''
        },
        {
            key: 'add',
            Icon: <AiOutlinePlus />,
            className: selectedTab == 'add' ? 'is-active' : '',
            Label:"Ajouter un produit",
            onClick: () => handleSelectedTab('add'),
        },
        {
            key: 'edit',
            Icon: <MdModeEditOutline />,
            className: selectedTab == 'edit' ? 'is-active' : '',
            Label: "Modifier un produit",
            onClick: () => handleSelectedTab('edit')
        }
    ]

    return (
        <AdminTabsStyled>
            {
                tabsConfig.map((tab) => {
                    return <Tab
                        key={tab.key}
                        Icon={tab.Icon}
                        className={tab.className}
                        Label={tab.Label}
                        onClick={tab.onClick}
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