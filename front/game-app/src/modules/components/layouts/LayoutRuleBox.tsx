import React from 'react';
import './LayoutRuleBox.css';

const LayoutRuleBox = ({ props }: any) => {
    return (
        <div className="jumbotron">
            <h1 className="display-5">Games Cup</h1>
            <p>Selecione os jogos de sua preferência para realizar a competição e depois pressione o botão Gerar Campeonato.</p>
            <b>Confira abaixo as etapas e regras da competição.</b>
            <ul>
                <li>Selecione ao menos 4 jogos de sua preferência.</li>
                <li>Para mais jogos continue selecionando até que a quantidade seja uma potência de 2 (4, 8, 16...).</li>
                <li>A lista de jogos selecionados será ordenada em ordem alfabética.</li>
                <li>A primeira fase da disputa será uma batalha entre o primeiro e o último da lista ordenada e assim por diante.</li>
                <li>As demais fases da disputa serão batalhas entre a sequência de ganhadores da fase anterior.</li>
            </ul>
            <h1 className="display-6">{props.title}</h1>
        </div>
    )
}

export default LayoutRuleBox;