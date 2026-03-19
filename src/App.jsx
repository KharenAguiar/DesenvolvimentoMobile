import { useState } from "react";
import { Button, Container, ListGroup, Form } from 'react-bootstrap';

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
      <Container className="mt-5 text-center" style={{ maxWidth: "400px" }}>
      <h1>Todo List</h1>
      <Form.Control
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        className="mb-2">
      </Form.Control>      

    <Button variant="primary" onClick={adicionarTarefa} className="mb-3">
      Adicionar Tarefa
    </Button>
    <ListGroup>
      {lista.map((tarefa, index) => (
        <ListGroup.Item key={index}>
          {tarefa}
          <Button variant="danger" size="sm" onClick={() => removerTarefa(index)} className="float-end">
            Remover
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>

    </Container>
  );

}