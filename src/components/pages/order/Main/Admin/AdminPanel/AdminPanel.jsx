import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'
import AdminTabContext from '../../../../../../context/AdminTabContext'
import getTabsConfig from '../../../../../../config/tabsConfig';
import OrderContext from '../../../../../../context/OrderContext';
import {EMPTY_PRODUCT} from '../../../../../../enums/product'

function AdminPanel() {
    const { selectedTab } = useContext(AdminTabContext);
    const {productSelected} = useContext(OrderContext)

    const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
    const tabs = getTabsConfig(hasAlreadyBeenClicked)
    const activeTab = tabs.find(tab => tab.key === selectedTab);

    return (
        <AdminPanelStyled>
            {activeTab && activeTab.Content}
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