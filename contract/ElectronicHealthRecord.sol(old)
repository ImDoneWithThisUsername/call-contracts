// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract ElectronicHealthRecord {
    struct EHR{
        address sender;
        address owner;
        string ehrLink;
        string encryptedKey;
    }

    mapping(uint256 => EHR) public ehrs;

    uint256 public numberOfRecords = 0;

    function sendEHR(address _owner, string memory _ehrLink, string memory _encryptedKey) public returns (uint256){
        EHR storage ehr = ehrs[numberOfRecords];

        ehr.sender = msg.sender;
        ehr.owner = _owner;
        ehr.ehrLink = _ehrLink;
        ehr.encryptedKey = _encryptedKey;

        numberOfRecords++;
        return numberOfRecords - 1; // return the uint key of the ehr
    }

    // function getNumberOfRecords() public view returns (uint256){
    //     return numberOfRecords;
    // }

    // function getEHRByKey(uint256 _key) public view returns (address, address, string memory, string memory){
    //     return (ehrs[_key].sender, ehrs[_key].owner,ehrs[_key].ehrLink,ehrs[_key].encryptedKey);
    // }
}