import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

import { Container, RadiosBox, TransactionsTypeContainer } from './style';

type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({ isOpen, onRequestClose}: NewTransactionsModalProps) {
  const [type, setType] = useState('deposit');

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
          <RadiosBox 
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadiosBox>
          <RadiosBox 
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadiosBox>
        </TransactionsTypeContainer>

        <input placeholder='Categoria' />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}