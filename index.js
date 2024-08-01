require('dotenv').config();
const { ethers } = require('ethers');

// WebSocket provider connection using Alchemy or Infura
const provider = new ethers.WebSocketProvider(process.env.WEBSOCKET_URL);

// Event listener for pending transactions in mempool
provider.on('pending', async (txHash) => {
  try {
    const tx = await provider.getTransaction(txHash);
    if (tx) {
      console.log(`\n📦 New pending transaction:`);
      console.log(`From: ${tx.from}`);
      console.log(`To: ${tx.to}`);
      console.log(`Value: ${ethers.formatEther(tx.value)} ETH`);
      console.log(`Gas: ${tx.gasPrice?.toString()}`);
      console.log(`Nonce: ${tx.nonce}`);
    }
  } catch (err) {
    console.error('Error:', err);
  }
});
