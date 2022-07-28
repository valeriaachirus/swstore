import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import Player from "../components/Audio"

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Player url="/public/audio/50 Cent  Candy Shop Directors Cut ft Olivia (mp3cut.net).mp3"/>
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
