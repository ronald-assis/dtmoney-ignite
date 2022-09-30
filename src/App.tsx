import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './TransactiosnContext';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from './components/NewTransactionsModal';
import { GlobalStyle } from "./global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  const handleOpenOrCloseNewTransactionsModal = () => {
    setIsNewTransactionsModalOpen(!isNewTransactionsModalOpen);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenOrCloseNewTransactionsModal} />
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleOpenOrCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
