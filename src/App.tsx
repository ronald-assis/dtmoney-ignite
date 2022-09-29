import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  const handleOpenOrCloseNewTransactionsModal = () => {
    setIsNewTransactionsModalOpen(!isNewTransactionsModalOpen);
  };

  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenOrCloseNewTransactionsModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleOpenOrCloseNewTransactionsModal}
      >
        Teste de modal
      </Modal>
      <GlobalStyle />
    </>
  );
}
