# MempoolWatcher – Watch Ethereum Mempool Transactions

MempoolWatcher is a Node.js application that listens to Ethereum's mempool for pending transactions. It connects to a WebSocket provider (e.g., Alchemy, Infura) and displays pending transactions' details such as `from`, `to`, `value`, `gasPrice`, and `nonce`.

---

## 🚀 Features

- Listen to Ethereum mempool for pending transactions
- Display transaction details in real-time
- Can be customized to filter specific transactions (e.g., by address)

---

## 🧰 Requirements

- Node.js >= 14
- Alchemy/Infura WebSocket URL

---

## ⚙️ Installation & Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/mohamdhamini/MempoolWatcher.git
    cd MempoolWatcher
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your Alchemy or Infura WebSocket URL:
    - Go to [Alchemy](https://www.alchemy.com) or [Infura](https://infura.io/)
    - Get your WebSocket URL (make sure it's from the mainnet)
    - Create a `.env` file and add the WebSocket URL:

    ```env
    WEBSOCKET_URL=wss://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
    ```

---

## 🧪 Running the Application

To run the application, simply execute:

```bash
node index.js
