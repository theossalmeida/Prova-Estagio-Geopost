import { Fragment } from "react"

export const Quartas = ({chave1, chave2, chave3, chave4}) => (
    <Fragment>
    <div class="mata-mata">
    <div class="titulo">Quartas de Final</div>
        <table class="eliminatorias">
            <td>{chave1}</td>
            <td>{chave2}</td>
            </table>
            <table class="eliminatorias">
            <td>{chave3}</td>
            <td>{chave4}</td>
        </table>
    </div>
    </Fragment>
)