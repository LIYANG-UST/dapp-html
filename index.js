const { ethers } = require("ethers");

async function connect() {
  if (window.ethereum != "undefined") {
    await ethereum.request({
      method: "eth_requestAccounts",
    });
  }
}

async function store() {
  if (typeof window.ethereum !== "undefined") {
    // address & abi
    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const abi = ["function store(uint256)"];

    // provider and signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // send tx
    const contract = new ethers.Contract(address, abi, signer);

    try {
      await contract.store(66);
    } catch (err) {
      console.log(err);
    }
  }
}

async function read() {
  if (typeof window.ethereum !== "undefined") {
    // address & abi
    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const abi = ["function retrieve() public view returns (uint256)"];

    // provider and signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // send tx
    const contract = new ethers.Contract(address, abi, signer);

    try {
      const data = await contract.retrieve();
      console.log("data", data.toString());
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = {
  connect,
  store,
  read,
};
