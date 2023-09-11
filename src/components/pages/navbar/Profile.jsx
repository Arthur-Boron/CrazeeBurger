import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import AuthContext from "../../../context/AuthContext"
import { useContext } from "react"

function Profile() {

  const {user} = useContext(AuthContext)
  
  const logout = () => {
    localStorage.removeItem('user');
  }

  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{user ? user.name : 'Guest'}</b>
        </p>
        <Link to="/">
          <div className="description" onClick={logout}>
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-left: ${theme.spacing.lg};

  .info {
    text-align: right;
    margin-right: ${theme.spacing.sm};
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`

export default Profile
