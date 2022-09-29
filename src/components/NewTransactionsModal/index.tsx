import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

import { Container, TransactionsTypeContainer } from './style';

type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({ isOpen, onRequestClose}: NewTransactionsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />
        <input type="number" placeholder='Valor' />

        <TransactionsTypeContainer>
          <button 
            type='button'
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button 
            type='button'
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionsTypeContainer>

        <input placeholder='Categoria' />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}