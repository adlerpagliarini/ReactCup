import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { MatchDto, MatchStageDto } from "../../models/games/GameDto";

interface Props {
  matchStage: MatchStageDto
  index: number,
  counter: number
}

const Matchs: React.FC<Props> = (props) => {
  return (
    <Container key={props.index}>
      <h2 className="matchTitle">Eliminatórias Fase {props.counter}</h2>
      <Row>
        {props.matchStage.matchs.map((match: MatchDto, ii: number) => (
          <Col key={ii}>
            <div className="details">
              <div className="title">{match.gameOne.title}</div>
              <div className="text"><span>Score: {match.gameOne.rate}</span>  {match.gameOne.id === match.idWinner ? <img src="/images/win.png" alt="winner" /> : null}</div>
            </div>
            <div className="details">
              <div className="title">{match.gameTwo.title}</div>
              <div className="text"><span>Score: {match.gameTwo.rate}</span>  {match.gameTwo.id === match.idWinner ? <img src="/images/win.png" alt="winner" /> : null}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Matchs;