require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_API_KEY))

const contractAbi=require('./abi.js');
const contractAddress=process.env.CONTRACT_ADDRESS;

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

contractInstance.methods["ehrs"](0).call().then(element => {
    console.log(`Array element at index ${0}: ${element}`);
    console.log(element)
  });
  