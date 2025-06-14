import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Web3 from 'web3';

interface Web3ContextType {
  web3: Web3 | null;
  account: string | null;
  chainId: number | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
  error: string | null;
}

interface Web3Error extends Error {
  code?: number;
  message: string;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateAccountInfo = useCallback(async () => {
    if (!web3 || !account) return;
    
    try {
      const chainId = await web3.eth.getChainId();
      setChainId(Number(chainId));
    } catch (err) {
      setError('Failed to update account info. Please refresh and try again.');
    }
  }, [web3, account]);

  const connectWallet = useCallback(async () => {
    try {
      setIsConnecting(true);
      setError(null);
      
      if (!window.ethereum) {
        throw new Error('Please install MetaMask to use this feature');
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setAccount(account);

      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      const chainId = await web3Instance.eth.getChainId();
      setChainId(Number(chainId));
    } catch (err) {
      const error = err as Web3Error;
      setError(error.message || 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWeb3(null);
    setAccount(null);
    setChainId(null);
  }, []);

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else {
        setAccount(accounts[0]);
        updateAccountInfo();
      }
    };

    const handleChainChanged = () => {
      updateAccountInfo();
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      // Check if already connected
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            connectWallet();
          }
        })
        .catch(() => {
          setError('Failed to check wallet connection');
        });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [connectWallet, disconnectWallet, updateAccountInfo]);

  const value = {
    web3,
    account,
    chainId,
    connect: connectWallet,
    disconnect: disconnectWallet,
    isConnecting,
    error,
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};

// Add TypeScript interface for window.ethereum
declare global {
  interface Window {
    ethereum: any;
  }
}