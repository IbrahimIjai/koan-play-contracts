import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const privateKey1 =
  "61f7bf6dd5facd3787fa05ce46aa9da9c29d7291dcda65df8cb80e8ec8795b32";
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      },
    },
  },
  defaultNetwork: "base_sepolia",
  networks: {
    base: {
      url: "https://lb.drpc.org/ogrpc?network=base&dkey=Asv5pVcZpEZuuMS7ScKuU2e9jnLtECER8LSvik6p2x9s",
      accounts: [privateKey1],
    },
    base_sepolia: {
      url: "https://lb.drpc.org/ogrpc?network=base-sepolia&dkey=Asv5pVcZpEZuuMS7ScKuU2e9jnLtECER8LSvik6p2x9s",
      accounts: [privateKey1],
    },
  },
};

export default config;
