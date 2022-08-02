import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import Player from "../components/Audio";
import ReactAudioPlayer from 'react-audio-player'

export function Store() {
  return (
    <>
      <h1 style={{
    marginBottom: '30px',
    textShadow: '2px 2px #0d6efd',
    color: "#ff0000",
    textAlign: 'center'}}>Welcome to the "Candy Shop"</h1>
      {/* <Player url="/public/audio/50 Cent  Candy Shop Directors Cut ft Olivia (mp3cut.net).mp3"/> */}
      <ReactAudioPlayer 
        src="/public/audio/50 Cent  Candy Shop Directors Cut ft Olivia (mp3cut.net).mp3"
        autoPlay
      />
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
           
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
