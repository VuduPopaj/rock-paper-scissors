import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Header, Divider, Container } from "semantic-ui-react";
import Home from "./components/Home";
import Rules from "./components/Rules";

function App() {
  return (
    <Container className="App" style={{ height: "100vh", width: "100%" }}>
      <Header
        as="h1"
        style={{ marginBottom: "5%", paddingTop: "5%", color: "#000000" }}
      >
        Rock, Paper, Scissors
      </Header>
      <Divider />
      <Header as="h2" style={{ marginBottom: "5%", color: "#000000" }}>
        Select your weapon!
      </Header>
      <Rules />
      <Home />
    </Container>
  );
}

export default App;
