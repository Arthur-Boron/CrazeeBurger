import { styled } from "styled-components"
import Button from "../../../../reusable-ui/Button"
import { theme } from "../../../../../theme";

export function EmptyMenuAdmin({ onReset }) {

    return (
        <EmptyMenuStyled>
            <span className="title">Le menu est vide ?</span>
            <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
            <Button Label={"Générer de nouveaux produits"} onClick={ onReset } className="emptyMenuButton"/>
        </EmptyMenuStyled>
    )
}
const EmptyMenuStyled = styled.div`
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme. shadows.strong};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title,
    .description {
        text-align: center;
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.greyBlue};
    }

    .title {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme. fonts.weights.semiBold};
    }

    .description {
        font-size: ${theme.fonts.size.P4};
        margin-top: 20px;
    }

    .emptyMenuButton {
        font-size: ${theme.fonts.size.XS};
        margin-top: 30px;
        width: auto;
    }

`



export default EmptyMenuAdmin