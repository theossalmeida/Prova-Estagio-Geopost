import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { Grupos } from "./components/comp_Grupos";
import { Rodadas } from "./components/comp_Rodadas";
import { ClassGrupos } from "./components/comp_ClassGrupos";
import { Oitavas } from "./components/mata-mata/comp_oitavas";
import { Quartas } from "./components/mata-mata/comp_quartas";
import { Semi } from "./components/mata-mata/comp_semi";
import * as r from "./gols"
import * as c from "./pontuacao"

export function Simulacao() {
    const [teams, setTeams] = useState([]);
    // Etapa para consumir a api
    useEffect(() => {
        axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
            headers: {
                'git-user': 'theossalmeida'
            }
        })
            .then(({ data }) => {
                setTeams(data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    var lista = []
    for (const pais in teams["Result"]) {
        lista.push(teams["Result"][pais]["Name"])
    };

    // Etapa para sortear os grupos
    var grupoA = [];
    var grupoB = [];
    var grupoC = [];
    var grupoD = [];
    var grupoE = [];
    var grupoF = [];
    var grupoG = [];
    var grupoH = [];

    var z = 0 // variavel de apoio para o sorteio
    while (z < 32) {
        var y = Math.floor(Math.random() * ((31 - x) - 0 + 1)) + 0
        if (z <= 3) {
            grupoA.push(lista[y])
        } else if (z > 3 && x <= 7) {
            grupoB.push(lista[y])
        } else if (z > 7 && x <= 11) {
            grupoC.push(lista[y])
        } else if (z > 11 && x <= 15) {
            grupoD.push(lista[y])
        } else if (z > 15 && x <= 19) {
            grupoE.push(lista[y])
        } else if (z > 19 && x <= 23) {
            grupoF.push(lista[y])
        } else if (z > 20 && x <= 27) {
            grupoG.push(lista[y])
        } else if (z > 27 && x <= 31) {
            grupoH.push(lista[y])
        }
        lista.splice(y, 1)
        z += 1
    }

    // classificacao dos grupos: 
    let classificacaoA = [
        { name: grupoA[0], pontos: c.pontosA1, sg: c.sg_A1 },
        { name: grupoA[1], pontos: c.pontosA2, sg: c.sg_A2 },
        { name: grupoA[2], pontos: c.pontosA3, sg: c.sg_A3 },
        { name: grupoA[3], pontos: c.pontosA4, sg: c.sg_A4 },
    ]
    classificacaoA.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoB = [
        { name: grupoB[0], pontos: c.pontosB1, sg: c.sg_B1 },
        { name: grupoB[1], pontos: c.pontosB2, sg: c.sg_B2 },
        { name: grupoB[2], pontos: c.pontosB3, sg: c.sg_B3 },
        { name: grupoB[3], pontos: c.pontosB4, sg: c.sg_B4 },
    ]
    classificacaoB.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoC = [
        { name: grupoC[0], pontos: c.pontosC1, sg: c.sg_C1 },
        { name: grupoC[1], pontos: c.pontosC2, sg: c.sg_C2 },
        { name: grupoC[2], pontos: c.pontosC3, sg: c.sg_C3 },
        { name: grupoC[3], pontos: c.pontosC4, sg: c.sg_C4 },
    ]
    classificacaoC.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoD = [
        { name: grupoD[0], pontos: c.pontosD1, sg: c.sg_D1 },
        { name: grupoD[1], pontos: c.pontosD2, sg: c.sg_D2 },
        { name: grupoD[2], pontos: c.pontosD3, sg: c.sg_D3 },
        { name: grupoD[3], pontos: c.pontosD4, sg: c.sg_D4 },
    ]
    classificacaoD.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoE = [
        { name: grupoE[0], pontos: c.pontosE1, sg: c.sg_E1 },
        { name: grupoE[1], pontos: c.pontosE2, sg: c.sg_E2 },
        { name: grupoE[2], pontos: c.pontosE3, sg: c.sg_E3 },
        { name: grupoE[3], pontos: c.pontosE4, sg: c.sg_E4 },
    ]
    classificacaoE.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoF = [
        { name: grupoF[0], pontos: c.pontosF1, sg: c.sg_F1 },
        { name: grupoF[1], pontos: c.pontosF2, sg: c.sg_F2 },
        { name: grupoF[2], pontos: c.pontosF3, sg: c.sg_F3 },
        { name: grupoF[3], pontos: c.pontosF4, sg: c.sg_F4 },
    ]
    classificacaoF.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoG = [
        { name: grupoG[0], pontos: c.pontosG1, sg: c.sg_G1 },
        { name: grupoG[1], pontos: c.pontosG2, sg: c.sg_G2 },
        { name: grupoG[2], pontos: c.pontosG3, sg: c.sg_G3 },
        { name: grupoG[3], pontos: c.pontosG4, sg: c.sg_G4 },
    ]
    classificacaoG.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoH = [
        { name: grupoH[0], pontos: c.pontosH1, sg: c.sg_H1 },
        { name: grupoH[1], pontos: c.pontosH2, sg: c.sg_H2 },
        { name: grupoH[2], pontos: c.pontosH3, sg: c.sg_H3 },
        { name: grupoH[3], pontos: c.pontosH4, sg: c.sg_H4 },
    ]
    classificacaoH.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    //Fase de Mata-Mata (oitavas):
    let class_oitavas = []
    // 1A x 2B
    function Oitavas1() {
        if (r.gol_1A != r.gol_2B) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoA[0].name}</td>
                        <td align="center">{r.gol_1A}x{r.gol_2B}</td>
                        <td align="left">{classificacaoB[1].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_1A === r.gol_2B) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoA[0].name}</td>
                        <td align="center">{r.gol_1A} ({r.penaltiA1}) x ({r.penaltiB2}) {r.gol_2B}</td>
                        <td align="left">{classificacaoB[1].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_1A + r.penaltiA1) > (r.gol_2B + r.penaltiB2)) {
        class_oitavas.push(classificacaoA[0].name)
    } else {
        class_oitavas.push(classificacaoB[1].name)
    }

    // 2B X 1A
    function Oitavas2() {
        if (r.gol_1B != r.gol_2A) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoA[1].name}</td>
                        <td align="center">{r.gol_2A}x{r.gol_1B}</td>
                        <td align="left">{classificacaoB[0].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_2A === r.gol_1B) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoA[1].name}</td>
                        <td align="center">{r.gol_2A} ({r.penaltiA2}) x ({r.penaltiB1}) {r.gol_1B}</td>
                        <td align="left">{classificacaoB[0].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_1B + r.penaltiB1) > (r.gol_2A + r.penaltiA2)) {
        class_oitavas.push(classificacaoB[0].name)
    } else {
        class_oitavas.push(classificacaoA[1].name)
    }

    // 1C X 2D 
    function Oitavas3() {
        if (r.gol_1C != r.gol_2D) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoC[0].name}</td>
                        <td align="center">{r.gol_1C}x{r.gol_2D}</td>
                        <td align="left">{classificacaoD[1].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_1C === r.gol_2D) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoC[0].name}</td>
                        <td align="center">{r.gol_1C} ({r.penaltiC1}) x ({r.penaltiD2}) {r.gol_2D}</td>
                        <td align="left">{classificacaoD[1].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_1C + r.penaltiC1) > (r.gol_2D + r.penaltiD2)) {
        class_oitavas.push(classificacaoC[0].name)
    } else {
        class_oitavas.push(classificacaoD[1].name)
    }

    // 2C X 1D 
    function Oitavas4() {
        if (r.gol_2C != r.gol_1D) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoC[1].name}</td>
                        <td align="center">{r.gol_2C}x{r.gol_1D}</td>
                        <td align="left">{classificacaoD[0].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_2C === r.gol_1D) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoC[1].name}</td>
                        <td align="center">{r.gol_2C} ({r.penaltiC2}) x ({r.penaltiD1}) {r.gol_1D}</td>
                        <td align="left">{classificacaoD[0].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_2C + r.penaltiC2) > (r.gol_1D + r.penaltiD1)) {
        class_oitavas.push(classificacaoC[1].name)
    } else {
        class_oitavas.push(classificacaoD[0].name)
    }

    // 1E X 2F 
    function Oitavas5() {
        if (r.gol_1E != r.gol_2F) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoE[0].name}</td>
                        <td align="center">{r.gol_1E}x{r.gol_2F}</td>
                        <td align="left">{classificacaoF[1].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_1E === r.gol_2F) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoE[0].name}</td>
                        <td align="center">{r.gol_1E} ({r.penaltiE1}) x ({r.penaltiF2}) {r.gol_2F}</td>
                        <td align="left">{classificacaoF[1].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_1E + r.penaltiE1) > (r.gol_2F + r.penaltiF2)) {
        class_oitavas.push(classificacaoE[0].name)
    } else {
        class_oitavas.push(classificacaoF[1].name)
    }

    // 2E X 1F 
    function Oitavas6() {
        if (r.gol_2E != r.gol_1F) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoE[1].name}</td>
                        <td align="center">{r.gol_2E}x{r.gol_1F}</td>
                        <td align="left">{classificacaoF[0].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_2E === r.gol_1F) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoE[1].name}</td>
                        <td align="center">{r.gol_2E} ({r.penaltiE2}) x ({r.penaltiF1}) {r.gol_1F}</td>
                        <td align="left">{classificacaoF[0].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_2E + r.penaltiE2) > (r.gol_1F + r.penaltiF1)) {
        class_oitavas.push(classificacaoE[1].name)
    } else {
        class_oitavas.push(classificacaoF[0].name)
    }

    // 1G X 2H
    function Oitavas7() {
        if (r.gol_1G != r.gol_2H) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoG[0].name}</td>
                        <td align="center">{r.gol_1G}x{r.gol_2H}</td>
                        <td align="left">{classificacaoH[1].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_1G === r.gol_2H) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoG[0].name}</td>
                        <td align="center">{r.gol_1G} ({r.penaltiG1}) x ({r.penaltiH2}) {r.gol_2H}</td>
                        <td align="left">{classificacaoH[1].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_1G + r.penaltiG1) > (r.gol_2H + r.penaltiH2)) {
        class_oitavas.push(classificacaoG[0].name)
    } else {
        class_oitavas.push(classificacaoH[1].name)
    }

    // 2G X 1H
    function Oitavas8() {
        if (r.gol_2G != r.gol_1H) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoG[1].name}</td>
                        <td align="center">{r.gol_2G}x{r.gol_1H}</td>
                        <td align="left">{classificacaoH[0].name}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_2G === r.gol_1H) {
            return (
                <table>
                    <tr>
                        <td align="right">{classificacaoG[1].name}</td>
                        <td align="center">{r.gol_2G} ({r.penaltiG2}) x ({r.penaltiH1}) {r.gol_1H}</td>
                        <td align="left">{classificacaoH[0].name}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_2G + r.penaltiG2) > (r.gol_1H + r.penaltiH1)) {
        class_oitavas.push(classificacaoG[1].name)
    } else {
        class_oitavas.push(classificacaoH[0].name)
    }


    // Quartas de final:
    let class_quartas = []
    function Quartas1() {
        if (r.gol_O11 != r.gol_O12) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[0]}</td>
                        <td align="center">{r.gol_O11}x{r.gol_O12}</td>
                        <td align="left">{class_oitavas[2]}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_O11 === r.gol_O12) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[0]}</td>
                        <td align="center">{r.gol_O11} ({r.penaltiO11}) x ({r.penaltiO12}) {r.gol_O12}</td>
                        <td align="left">{class_oitavas[2]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_O11 + r.penaltiO11) > (r.gol_O12 + r.penaltiO12)) {
        class_quartas.push(class_oitavas[0])
    } else { class_quartas.push(class_oitavas[2]) }

    function Quartas2() {
        if (r.gol_O21 != r.gol_O22) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[1]}</td>
                        <td align="center">{r.gol_O21}x{r.gol_O22}</td>
                        <td align="left">{class_oitavas[3]}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_O21 === r.gol_O22) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[1]}</td>
                        <td align="center">{r.gol_O21} ({r.penaltiO21}) x ({r.penaltiO22}) {r.gol_O21}</td>
                        <td align="left">{class_oitavas[3]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_O21 + r.penaltiO21) > (r.gol_O22 + r.penaltiO22)) {
        class_quartas.push(class_oitavas[1])
    } else { class_quartas.push(class_oitavas[3]) }

    function Quartas3() {
        if (r.gol_O31 != r.gol_O32) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[4]}</td>
                        <td align="center">{r.gol_O31}x{r.gol_O32}</td>
                        <td align="left">{class_oitavas[6]}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_O31 === r.gol_O32) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[4]}</td>
                        <td align="center">{r.gol_O31} ({r.penaltiO31}) x ({r.penaltiO32}) {r.gol_O31}</td>
                        <td align="left">{class_oitavas[6]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_O31 + r.penaltiO31) > (r.gol_O32 + r.penaltiO32)) {
        class_quartas.push(class_oitavas[4])
    } else { class_quartas.push(class_oitavas[6]) }

    function Quartas4() {
        if (r.gol_O41 != r.gol_O42) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[5]}</td>
                        <td align="center">{r.gol_O41}x{r.gol_O42}</td>
                        <td align="left">{class_oitavas[7]}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_O41 === r.gol_O42) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_oitavas[5]}</td>
                        <td align="center">{r.gol_O41} ({r.penaltiO41}) x ({r.penaltiO42}) {r.gol_O41}</td>
                        <td align="left">{class_oitavas[7]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_O41 + r.penaltiO41) > (r.gol_O42 + r.penaltiO42)) {
        class_quartas.push(class_oitavas[5])
    } else { class_quartas.push(class_oitavas[7]) }

    // Semi-final:
    let class_semi = []
    function Semi1() {
        if (r.gol_S11 != r.gol_S12) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_quartas[0]}</td>
                        <td align="center">{r.gol_S11}x{r.gol_S12}</td>
                        <td align="left">{class_quartas[2]}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_S11 === r.gol_S12) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_quartas[0]}</td>
                        <td align="center">{r.gol_S11} ({r.penaltiS11}) x ({r.penaltiS12}) {r.gol_S12}</td>
                        <td align="left">{class_quartas[2]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_S11 + r.penaltiS11) > (r.gol_S12 + r.penaltiS12)) {
        class_semi.push(class_quartas[0])
    } else { class_semi.push(class_quartas[2]) }

    function Semi2() {
        if (r.gol_S21 != r.gol_S22) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_quartas[1]}</td>
                        <td align="center">{r.gol_S21}x{r.gol_S22}</td>
                        <td align="left">{class_quartas[3]}</td>
                    </tr>
                </table>
            )
        } else if (r.gol_S21 === r.gol_S22) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_quartas[1]}</td>
                        <td align="center">{r.gol_S21} ({r.penaltiS21}) x ({r.penaltiS22}) {r.gol_S21}</td>
                        <td align="left">{class_quartas[3]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.gol_S21 + r.penaltiS21) > (r.gol_S22 + r.penaltiS22)) {
        class_semi.push(class_quartas[1])
    } else { class_semi.push(class_quartas[3]) }

    //Grande Final:
    let campeao = []
    function Final() {
        if (r.golsA != r.golsB) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_semi[0]}</td>
                        <td align="center">{r.golsA}x{r.golsB}</td>
                        <td align="left">{class_semi[1]}</td>
                    </tr>
                </table>
            )
        } else if (r.golsA === r.golsB) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_semi[0]}</td>
                        <td align="center">{r.golsA} ({r.penaltisA}) x ({r.penaltisB}) {r.golsB}</td>
                        <td align="left">{class_semi[1]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.golsA + r.penaltisA) > (r.golsB + r.penaltisB)) {
        campeao.push(class_semi[0])
    } else { campeao.push(class_semi[1]) }


    // Envio para api:

    const envioAPI = [
        {
            "equipeA": class_semi[0],
            "equipeB": class_semi[1],
            "golsEquipeA": r.golsA,
            "golsEquipeB": r.golsB,
            "golsPenaltyTimeA": r.penaltisA,
            "golsPenaltyTimeB": r.penaltisB,
        }
    ]

    useEffect(() => {
        axios.post('https://estagio.geopostenergy.com/WorldCup/InsertFinalResult',
            {
                "equipeA": class_semi[0],
                "equipeB": class_semi[1],
                "golsEquipeA": r.golsA,
                "golsEquipeB": r.golsB,
                "golsPenaltyTimeA": r.penaltisA,
                "golsPenaltyTimeB": r.penaltisB,
            },
            {
                headers: {
                    'git-user': 'theossalmeida'
                }
            }).then(console.log("success"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <div class="faseDeGrupos">
                <div class="titulo">Grupos sorteados: </div>
                <table class="grupo">
                    <Grupos
                        grupo="Grupo A:"
                        time1={grupoA[0]}
                        time2={grupoA[1]}
                        time3={grupoA[2]}
                        time4={grupoA[3]}
                    />
                    <Grupos
                        grupo="Grupo B:"
                        time1={grupoB[0]}
                        time2={grupoB[1]}
                        time3={grupoB[2]}
                        time4={grupoB[3]}
                    />
                    <Grupos
                        grupo="Grupo C:"
                        time1={grupoC[0]}
                        time2={grupoC[1]}
                        time3={grupoC[2]}
                        time4={grupoC[3]}
                    />
                    <Grupos
                        grupo="Grupo D:"
                        time1={grupoD[0]}
                        time2={grupoD[1]}
                        time3={grupoD[2]}
                        time4={grupoD[3]}
                    />
                    <Grupos
                        grupo="Grupo E:"
                        time1={grupoE[0]}
                        time2={grupoE[1]}
                        time3={grupoE[2]}
                        time4={grupoE[3]}
                    />
                    <Grupos
                        grupo="Grupo F:"
                        time1={grupoF[0]}
                        time2={grupoF[1]}
                        time3={grupoF[2]}
                        time4={grupoF[3]}
                    />
                    <Grupos
                        grupo="Grupo G:"
                        time1={grupoG[0]}
                        time2={grupoG[1]}
                        time3={grupoG[2]}
                        time4={grupoG[3]}
                    />
                    <Grupos
                        grupo="Grupo H:"
                        time1={grupoH[0]}
                        time2={grupoH[1]}
                        time3={grupoH[2]}
                        time4={grupoH[3]}
                    />
                </table>
            </div>
            <div class="resultadosGrupos">
                <a class="titulo">Simulação das Rodadas</a>
                <table class="rodadasGrupo">
                    <thead>
                        <th></th>
                        <th colSpan={3}>Rodada 1</th>
                        <th colSpan={3}>Rodada 2</th>
                        <th colSpan={3}>Rodada 3</th>
                    </thead>
                    <tbody>
                        <Rodadas
                            grupo="Grupo A"
                            time1={grupoA[0]}
                            time2={grupoA[1]}
                            time3={grupoA[2]}
                            time4={grupoA[3]}
                        />
                        <Rodadas
                            grupo="Grupo B"
                            time1={grupoB[0]}
                            time2={grupoB[1]}
                            time3={grupoB[2]}
                            time4={grupoB[3]}
                        />
                        <Rodadas
                            grupo="Grupo C"
                            time1={grupoC[0]}
                            time2={grupoC[1]}
                            time3={grupoC[2]}
                            time4={grupoC[3]}
                        />
                        <Rodadas
                            grupo="Grupo D"
                            time1={grupoD[0]}
                            time2={grupoD[1]}
                            time3={grupoD[2]}
                            time4={grupoD[3]}
                        />
                        <Rodadas
                            grupo="Grupo E"
                            time1={grupoE[0]}
                            time2={grupoE[1]}
                            time3={grupoE[2]}
                            time4={grupoE[3]}
                        />
                        <Rodadas
                            grupo="Grupo F"
                            time1={grupoF[0]}
                            time2={grupoF[1]}
                            time3={grupoF[2]}
                            time4={grupoF[3]}
                        />
                        <Rodadas
                            grupo="Grupo G"
                            time1={grupoG[0]}
                            time2={grupoG[1]}
                            time3={grupoG[2]}
                            time4={grupoG[3]}
                        />
                        <Rodadas
                            grupo="Grupo H"
                            time1={grupoH[0]}
                            time2={grupoH[1]}
                            time3={grupoH[2]}
                            time4={grupoH[3]}
                        />
                    </tbody>
                </table>
            </div>
            <div class="ClassificacaoDosGrupos">
                <a class="titulo"><strong>Classificação dos Grupos</strong></a>
                <div class="divClassGrupos">
                    <ClassGrupos
                        grupo="Grupo A"
                        time1={classificacaoA[0]}
                        time2={classificacaoA[1]}
                        time3={classificacaoA[2]}
                        time4={classificacaoA[3]}
                    />
                    <ClassGrupos
                        grupo="Grupo B"
                        time1={classificacaoB[0]}
                        time2={classificacaoB[1]}
                        time3={classificacaoB[2]}
                        time4={classificacaoB[3]}
                    />
                    <ClassGrupos
                        grupo="Grupo C"
                        time1={classificacaoC[0]}
                        time2={classificacaoC[1]}
                        time3={classificacaoC[2]}
                        time4={classificacaoC[3]}
                    />
                </div>
                <div class="divClassGrupos">
                    <ClassGrupos
                        grupo="Grupo A"
                        time1={classificacaoD[0]}
                        time2={classificacaoD[1]}
                        time3={classificacaoD[2]}
                        time4={classificacaoD[3]}
                    />
                    <ClassGrupos
                        grupo="Grupo E"
                        time1={classificacaoE[0]}
                        time2={classificacaoE[1]}
                        time3={classificacaoE[2]}
                        time4={classificacaoE[3]}
                    />
                    <ClassGrupos
                        grupo="Grupo F"
                        time1={classificacaoF[0]}
                        time2={classificacaoF[1]}
                        time3={classificacaoF[2]}
                        time4={classificacaoF[3]}
                    />
                </div>
                <div class="divClassGrupos">
                    <ClassGrupos
                        grupo="Grupo G"
                        time1={classificacaoG[0]}
                        time2={classificacaoG[1]}
                        time3={classificacaoG[2]}
                        time4={classificacaoG[3]}
                    />
                    <ClassGrupos
                        grupo="Grupo H"
                        time1={classificacaoH[0]}
                        time2={classificacaoH[1]}
                        time3={classificacaoH[2]}
                        time4={classificacaoH[3]}
                    />
                </div>
                <p>* SG = Saldo de Gols</p>
            </div>
            <Oitavas
                chave1={Oitavas1()}
                chave2={Oitavas2()}
                chave3={Oitavas3()}
                chave4={Oitavas4()}
                chave5={Oitavas5()}
                chave6={Oitavas6()}
                chave7={Oitavas7()}
                chave8={Oitavas8()}
            />
            <Quartas
            chave1={Quartas1()}
            chave2={Quartas2()}
            chave3={Quartas3()}
            chave4={Quartas4()}
            />
            <Semi 
            chave1={Semi1()}
            chave2={Semi2()}
            />
            <div class="final">
                <div class="titulo-final">Grande Final</div>
                <table class="tabela-final">
                    <td>{Final()}</td>
                </table>
            </div>
            <div class="campeao">
                <p>
                    O grande campeão da Copa do Mundo será:
                </p>
                <img class="bandeira-campeao" src={`../imgs/${campeao[0]}.png`} />
                <p>{campeao[0]}</p>
            </div>
        </Fragment>
    )
}
