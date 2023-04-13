require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_API_KEY))

const contractAbi=require('./abi.js');
const contractAddress=process.env.CONTRACT_ADDRESS;

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

const account1 = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY_1);
const account2 = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY_2);

console.log("from " + account1.address)
console.log("to " + account2.address)

const owner = account2.address; 
const ehrLink = 'link'; 
const encryptedKey = 'key';

// create the transaction object
const txObject = {
    from: account1.address,
    to: contractAddress,
    gas: 200000,
    data: contractInstance.methods.sendEHR(owner, ehrLink, encryptedKey).encodeABI()
};

// sign the transaction
web3.eth.accounts.signTransaction(txObject, account1.privateKey)
    .then(signedTx => {
        // send the signed transaction to the network
        web3.eth.sendSignedTransaction(signedTx.rawTransaction)
            .on('receipt', receipt => {
                console.log('Transaction receipt:', receipt);
            })
            .on('error', error => {
                console.error('Error sending EHR:', error);
            });
    })
    .catch(error => {
        console.error('Error signing transaction:', error);
    });
