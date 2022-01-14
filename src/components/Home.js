import React, { useState, useEffect } from "react";
import { Button, Header, Image } from "semantic-ui-react";
import rock from "../assets/images/rock.png";
import scissors from "../assets/images/scissors.png";
import paper from "../assets/images/paper.png";



function Home() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const choices = ["Rock", "Paper", "Scissors"];
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("Score");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  let buffer = [];
  buffer.push(
    <span key="undefined">
      <Header as="h2" style={{ marginBottom: "10px", color: "#000000" }}>
        {result}
      </Header>
      <Header as="h2" style={{ marginBottom: "10px", color: "#000000" }}>
        CPU has chosen: {computerChoice} as a weapon.
      </Header>
      <Button
        style={{ marginTop: "10px", backgroundColor: "#ffffff" }}
        onClick={() => setDisabled(false)}
      >
        Play again
      </Button>
    </span>
  );

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    localStorage.setItem("Score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "ScissorsPaper":
        case "RockScissors":
        case "PaperRock":
          setResult("You won!");
          setScore(score + 1);
          setDisabled(true);
          break;
        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
          setResult("You lost!");
          setScore(score - 1);
          setDisabled(true);
          break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
          setResult("It's a draw!");
          setDisabled(true);
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div style={{ marginTop: "20px" }}>
      <Button.Group size="big" style={{ marginBottom: "5%" }}>
        <Button
          style={{ backgroundColor: "#ffffff" }}
          disabled={disabled}
          onClick={() => handleClick("Rock")}
        >
          <Image src={rock} size="small" />
        </Button>
        <Button.Or style={{ marginTop: "10%" }} />
        <Button
          style={{ backgroundColor: "#ffffff" }}
          disabled={disabled}
          onClick={() => handleClick("Scissors")}
        >
          <Image src={scissors} size="small" />
        </Button>
        <Button.Or style={{ marginTop: "10%" }} />
        <Button
          style={{ backgroundColor: "#ffffff" }}
          disabled={disabled}
          onClick={() => handleClick("Paper")}
        >
          <Image src={paper} size="small" />
        </Button>
      </Button.Group>
      <Header as="h2" style={{ marginBottom: "20px", color: "#696969" }}>
        Score: {score}
      </Header>
      <div>{disabled && buffer}</div>
    </div>
  );
}

export default Home;
