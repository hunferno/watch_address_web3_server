import { ethers } from "ethers";

//Internal functions
const getEthPrice = async (req, res) => {
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_API_KEY);
  const price = await provider.getEtherPrice();
  return ethers.formatEther(price);
};

//Exported functions
export const isValidAddress = async (req, res) => {
  const { address } = req.body;
  const isValid = ethers.isAddress(address);
  res.status(200).json({ isValid });
};

export const getEthBalance = async (req, res) => {
  const { address } = req.body;
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_API_KEY);
  const balance = await provider.getBalance(address);
  res.status(200).json({ balance: ethers.formatEther(balance) });
};

export const getTotalBalance = async (req, res) => {
  const { addresses } = req.body;
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_API_KEY);
  let totalBalance = ethers.BigNumber.from(0);
  for (let i = 0; i < addresses.length; i++) {
    const balance = await provider.getBalance(addresses[i]);
    totalBalance = totalBalance.add(balance);
  }
  res.status(200).json({ totalBalance: ethers.formatEther(totalBalance) });
}
