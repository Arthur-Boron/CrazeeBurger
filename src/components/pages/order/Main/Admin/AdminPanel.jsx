import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import AdminTabContext from '../../../../../context/AdminTabContext'

function AdminPanel() {
    const { selectedTab } = useContext(AdminTabContext);

    return (
        <AdminPanelStyled>
            {selectedTab === 'add' && <div>Ajouter un produit</div>}
            {selectedTab === 'edit' && <div>Modifier un produit</div>}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    background: ${theme.colors.white};
    height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`
export default AdminPanel