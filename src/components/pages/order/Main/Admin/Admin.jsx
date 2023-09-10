import React, { useContext } from 'react'
import { styled } from 'styled-components'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel/AdminPanel'
import AdminTabContext from '../../../../../context/AdminTabContext'
import { motion, useAnimation } from 'framer-motion';

function Admin() {

  const {isCollapsed} = useContext(AdminTabContext)

  const panelVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <AdminStyled>
      <AdminTabs />
        <motion.div
          initial="closed"
          animate={isCollapsed ? 'closed' : 'open'}
          variants={panelVariants}
        >
          {!isCollapsed && <AdminPanel />}
        </motion.div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
`

export default Admin