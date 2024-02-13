import React, { useState, useEffect } from 'react';
import { GameService } from '../../services/gameServices/GameService';
import { GameCupDto, MatchStageDto } from '../../models/games/GameDto';
import './GameCup.css'
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Matchs from './Matchs';
import { useModal } from '../errors/context/ModalContext';
import { ApiError } from '../../models/apis/ApiDto';

export const GameCup: React.FC = () => {
    const { showModal } = useModal();
    const { idGameCup } = useParams<{ idGameCup: string }>();
    const [gameCup, setGameCup] = useState<GameCupDto>();

    useEffect(() => { }, []); // [] Load just once

    useEffect(() => {
        async function fetchData() {

            try {
                if (idGameCup)
                    await GameService.getGameCupById(idGameCup).then(gameCup => setGameCup(gameCup));
            } catch (e: any) {
                let message: string = e.message;
                if (e.response?.data?.errors === Array)
                    message = e.response.data.errors.map((error: ApiError) => `${error.value}`);

                showModal({
                    title: 'Não foi possível consultar a Copa de Games',
                    body: message
                });
            }
        }
        fetchData();
    }, [idGameCup]);

    return (
        <Container>
            <div className="listGameCup">
                <div className="item">
                    <div className="selected">
                        <img src="/images/gold.png" alt="winner" />
                    </div>
                    <div className="details">
                        <div className="title">{gameCup?.winner.title}</div>
                        <div className="year">Ano: {gameCup?.winner.year} - Score: {gameCup?.winner.rate}</div>
                    </div>
                </div>
                <div className="item">
                    <div className="selected">
                        <img src="/images/silver.png" alt="second" />
                    </div>
                    <div className="details">
                        <div className="title">{gameCup?.second.title}</div>
                        <div className="year">Ano: {gameCup?.second.year} - Score: {gameCup?.second.rate}</div>
                    </div>
                </div>
            </div>
            <h2 className="matchTitle">Acompanhe abaixo o resultado de cada partida!</h2>
            {gameCup?.matchStages.map((matchStage: MatchStageDto, i: number) =>
                <div key={i+1} className="listOfMatchs">
                    <Matchs matchStage={matchStage} index={i} counter={i + 1} />
                </div>
            )}
        </Container>
    );
};