import Modal from "react-modal";
import closeImg from "../../assets/Fechar.svg";
import Entradas from "../../assets/Entradas.svg";
import Saidas from "../../assets/Saídas.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container>
          <h2>Cadastrar Transação</h2>

          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType("deposit")}
              isActive={type === "deposit"}
            >
              <img src={Entradas} alt="Entradas" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type === "withdraw"}
            >
              <img src={Saidas} alt="Saídas" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
