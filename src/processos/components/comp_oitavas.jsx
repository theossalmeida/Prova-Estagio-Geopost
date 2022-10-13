import { Fragment } from "react"

export const Oitavas = ({chave1, chave2, chave3, chave4, chave5, chave6, chave7, chave8}) => (
    <Fragment>
        <div class="mata-mata">
                    <div class="titulo">Oitavas de Final</div>
                    <table class="eliminatorias">
                        <td>{chave1}</td>
                        <td>{chave3}</td>
                    </table>
                    <table class="eliminatorias">
                        <td>{chave2}</td>
                        <td>{chave4}</td>
                    </table>
                    <table class="eliminatorias">
                        <td>{chave5}</td>
                        <td>{chave7}</td>
                    </table>
                    <table class="eliminatorias">
                        <td>{chave6}</td>
                        <td>{chave8}</td>                   
                    </table>
                </div>
    </Fragment>
)