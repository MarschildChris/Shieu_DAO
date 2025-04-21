const tokenSaleAddress = "YOUR_DEPLOYED_TOKENSALE_ADDRESS";
const tokenSaleABI = [ 
  "function buyTokens() public payable"
];

async function buyTokens() {
  if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const tokenSale = new ethers.Contract(tokenSaleAddress, tokenSaleABI, signer);

    const tx = await tokenSale.buyTokens({ value: ethers.parseEther("0.01") });
    await tx.wait();

    alert("Tokens purchased!");
  } else {
    alert("Please install MetaMask.");
  }
}
