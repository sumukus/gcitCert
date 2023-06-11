# gcitCert
This is a simple implementation of dApp in react native using the MetaMask wallet and ethersjs.

# Application Overview
We will create a certificate issue application for our GCIT college. The mobile dApp will have the following feature:

+ Issue Certificate - The authorized person will be able to issue the certificate
+ Verify Certificate - Anyone can check the authenticity of the certificate and verify whether it was issued by the college
+ View Certificate Details - the individual can access their certificate details from the system
+ View Account Information - User will be able to see account address and its balance

# Replicate the above mobile dApp
In oder to try this app, follow the steps given below

## Clone tbe app and install the necessary packages
```
git clone git@github.com:sumukus/gcitCert.git gcitCert
cd gcitCert
npm i

```
### Edit the files inside smartcontract directory
You have to edit the gcitCert.sol file.
+ Inside the gcitCert.sol file replace the address in addgcitCert method with one of your MetaMask wallet account address from testnet(Sepolia)


## Create .env file 
Create the .env file in the root directory and add the following lines 
```
SMART_CONTRACT_ADDRESS=Your smart contract address 
INFURA_API=infura api for your app
CERTIFICATE_ISSUER=address of certificate issuer
```
  
