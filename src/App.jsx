import { useState } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import logo from "./assets/react.svg";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;
    setLista([...lista, tarefa]);
    setTarefa("");
  }

  function removerTarefa(index) {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="shadow-lg p-4"
        style={{
          width: "500px",
          borderRadius: "20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="text-center">
          <img src={logo} alt="React" style={{ width: 90 }} className="mb-3" />

          <h1 className="mb-2">TodoList Azure Deploy</h1>

          <p className="text-primary fw-bold">
            Atualizado automaticamente via GitHub Actions e Azure
          </p>
        </div>

        <Form.Control
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          className="mb-3"
        />

        <Button variant="success" onClick={adicionarTarefa} className="mb-4">
          Adicionar Tarefa
        </Button>

        <ListGroup>
          {lista.length === 0 ? (
            <ListGroup.Item className="text-center text-muted">
              Nenhuma tarefa cadastrada
            </ListGroup.Item>
          ) : (
            lista.map((tarefa, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                {tarefa}

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removerTarefa(index)}
                >
                  Remover
                </Button>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card>
    </Container>
  );
}
