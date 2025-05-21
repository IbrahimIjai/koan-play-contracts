# KoanPlay Lottery & Prediction Games

![KoanPlay Logo](https://via.placeholder.com/150x150.png?text=KoanPlay)

## 🎮 Overview

KoanPlay is a decentralized gaming platform on Farcaster featuring a provably fair lottery and prediction games inspired by PancakeSwap. Built with transparency and fairness at its core, KoanPlay is being developed in two versions:

1. **Chainlink Version**: Leverages Chainlink VRF for verifiable randomness to ensure all games are tamper-proof and truly random
2. **Gelato Version**: Deployed on Monad testnet, utilizing Gelato for both randomness generation and reliable automation of lottery drawings and prize distributions

## 🎲 Features

### Lottery System
- **Provably Fair**: Powered by Chainlink VRF (Verifiable Random Function)
- **Transparent Rewards**: Clear reward distribution across multiple brackets
- **Bulk Purchase Discounts**: Buy more tickets for better rates
- **Auto-Injection**: Option to reinject funds into subsequent lottery rounds
- **Treasury Fee**: Configurable fee structure for platform sustainability

### Prediction Games (Coming Soon)
- **Market Prediction**: Bet on price movements
- **Customizable Time Frames**: Multiple prediction windows
- **Leaderboards**: Compete with other players

## 🛠️ Technical Architecture

### Smart Contracts

#### Version 1 (Chainlink)
- **KoanPlayLottery.sol**: Main lottery contract handling ticket purchases, drawings, and prize distribution
- **RandomNumberGenerator.sol**: Interfaces with Chainlink VRF to provide verifiable random numbers
- **IKoanPlayLottery.sol**: Interface defining the lottery contract functions

#### Version 2 (Gelato)
- **KoanPlayLotteryGelato.sol**: Main lottery contract optimized for Monad testnet
- **GelatoRandomness.sol**: Utilizes Gelato for randomness generation
- **IKoanPlayLottery.sol**: Common interface for both implementations

### Technology Stack

- **Blockchain**: 
  - Version 1: Base, Optimism, or other EVM-compatible chains
  - Version 2: Monad Testnet
- **Smart Contracts**: Solidity 0.8.20+
- **Randomness & Automation**: 
  - Version 1: Chainlink VRF for verifiable randomness
  - Version 2: Gelato Network for randomness and decentralized task automation
- **Development Framework**: Hardhat
- **Testing**: Hardhat Test Suite
- **Frontend**: React, Next.js, Farcaster Frames (upcoming)

## 🔄 Lottery Workflow

1. **Setup**: Admin initializes lottery with parameters (ticket price, reward breakdown, etc.)
2. **Open Phase**: Users purchase tickets with unique number combinations
3. **Close Phase**: Admin closes ticket sales
4. **Drawing Phase**: Random winning numbers are generated via Chainlink VRF
5. **Claim Phase**: Winners claim their prizes based on matching numbers

## 💰 Reward Structure

Rewards are distributed across 6 brackets based on matching numbers:
- Bracket 0: Match 1 number
- Bracket 1: Match 2 numbers
- Bracket 2: Match 3 numbers
- Bracket 3: Match 4 numbers
- Bracket 4: Match 5 numbers
- Bracket 5: Match all 6 numbers

## 🔐 Security Features

- **ReentrancyGuard**: Protection against reentrancy attacks
- **Ownable**: Controlled access to admin functions
- **Contract Restrictions**: Prevention of contract interactions for fairness
- **SafeERC20**: Safe token transfers

## 🚀 Roadmap

- **Q2 2025**: Launch of KoanPlay Lottery on Farcaster
- **Q3 2025**: Introduction of Prediction Games
- **Q4 2025**: Multi-token support for games
- **Q1 2026**: DAO governance for platform parameters

## 👨‍💻 Development

### Prerequisites

- Node.js v16+
- npm or yarn
- Hardhat

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/koanplay.git

# Navigate to the project directory
cd koanplay

# Install dependencies
npm install
# or
yarn install
```

### Testing

```bash
# Run tests
npx hardhat test

# Deploy to testnet
npx hardhat run scripts/deploy.js --network testnet
```

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Twitter: [@KoanPlay](https://twitter.com/KoanPlay)
- Discord: [KoanPlay Community](https://discord.gg/koanplay)
- Farcaster: @koanplay

---

Built with ❤️ by the KoanPlay Team
