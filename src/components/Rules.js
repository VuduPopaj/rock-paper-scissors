import React, { useState } from "react";
import { Modal, Button, Image } from "semantic-ui-react";
import rock from "../assets/images/rock.png";
import scissors from "../assets/images/scissors.png";
import paper from "../assets/images/paper.png";

function Rules() {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      style={{ backgroundColor: "#3b3f46", color: "#ffffff" }}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ backgroundColor: "#808080" }}>Rules</Button>}
    >
      <Modal.Header style={{ color: "#ffffff", backgroundColor: "#3b3f46" }}>
        <h1>RULES OF THE GAME</h1>
      </Modal.Header>
      <Modal.Content style={{ backgroundColor: "#3b3f46" }}>
        <Modal.Description>
          <h3>
            Rock breaks scissors and therefore rock wins over scissors. Rock
            loses against paper.
            <Image src={rock} size="mini" floated="left" />
          </h3>
          <h3>
            Scissors cut paper therefore scissors win over paper. Scissors lose
            against rock.
            <Image src={scissors} size="mini" floated="left" />
          </h3>

          <h3>
            Paper covers rock therefore paper wins over rock. Paper loses
            against scissors.
            <Image src={paper} size="mini" floated="left" />
          </h3>
          <h3>
            If the player and computer make the same selection, there is a tie.
          </h3>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ backgroundColor: "#3b3f46" }}>
        <Button
          content="Close"
          labelPosition="right"
          icon="close"
          onClick={() => setOpen(false)}
          style={{ backgroundColor: "#808080" }}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Rules;
