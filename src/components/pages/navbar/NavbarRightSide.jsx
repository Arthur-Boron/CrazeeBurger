import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from "../../../theme"
import Profile from './Profile'
import ToggleButton from '../../reusable-ui/ToggleButton'
import { ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { FaUserSecret } from "react-icons/fa"

function NavbarRightSide({name}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const displayToastNotifiaction = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "light",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
    
  }

  return (
    <NavbarRightSideStyled>
        <ToggleButton 
          labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
          labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
          onToggle={displayToastNotifiaction}
        />
        <Profile name={name}/>
        <ToastContainer />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right:  ${theme.spacing.xl};

  .Toastify__progress-bar--info {
    background: ${theme.colors.primary};
  }
`

export default NavbarRightSide