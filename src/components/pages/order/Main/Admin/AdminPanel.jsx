import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import AdminTabContext from '../../../../../context/AdminTabContext'
import getTabsConfig from '../../../../../config/TabsConfig';

function AdminPanel() {
    const { selectedTab } = useContext(AdminTabContext);

    const tabs = getTabsConfig(selectedTab)
    const activeTab = tabs.find(tab => tab.key === selectedTab);

    return (
        <AdminPanelStyled>
            {activeTab && <div>{activeTab.Label}</div>}
        </AdminPanelStyled>
    );
}

const AdminPanelStyled = styled.div`
    background: ${theme.colors.white};
    height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`
export default AdminPanel