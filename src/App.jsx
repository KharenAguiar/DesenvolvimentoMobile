import { useState } from "react";
import { Button, Container, ListGroup, Form, Card } from "react-bootstrap";
import logo from "./assets/react.svg";

export default function App() {
  // fazendo o todolist com bostrap mesmo
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return; // Evita adicionar tarefas vazias

    setLista([...lista, tarefa]);
    setTarefa(""); // Limpa o campo de entrada após adicionar
  }

  // Não sei cê tá pedindo, mas tô adicionando
  function removerTarefa(index) {
    const novaLista = [...lista];
    novaLista.splice(index, 1); // Remove a tarefa do array
    setLista(novaLista); // Atualiza o estado com a nova lista 
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <Card
        className="shadow-lg p-4"
        style={{
          width: "500px",
          borderRadius: "20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="text-center">
          <img
            src={logo}
            alt="React"
            style={{ width: 90 }}
            className="mb-3"
          />

          <h1 className="mb-2">TodoList Azure Deploy 🚀</h1>

          <p className="text-primary fw-bold">
            Atualizado automaticamente via GitHub Actions + Azure
          </p>
        </div>

        <Form.Control
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          className="mb-3"
        />

        <Button
          variant="success"
          onClick={adicionarTarefa}
          className="mb-4"
        >
          ➕ Adicionar Tarefa
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
                  🗑 Remover
                </Button>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card>
    </Container>
  );
}