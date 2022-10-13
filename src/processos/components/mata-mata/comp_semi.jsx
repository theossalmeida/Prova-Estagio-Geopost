import { Fragment } from "react"

export const Semi = ({chave1, chave2}) => (
    <Fragment>
    <div class="mata-mata">
    <div class="titulo">Semi-final</div>
        <table class="eliminatorias">
            <td>{chave1}</td>
            </table>
            <table class="eliminatorias">
            <td>{chave2}</td>
        </table>
    </div>
    </Fragment>
)