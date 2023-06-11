# gcitCert
This is a simple implementation of dApp in react native using the MetaMask wallet and ethersjs.

# Application Overview
We will create a certificate issue application for our GCIT college. The mobile dApp will have the following feature:

+ Issue Certificate - The authorized person will be able to issue the certificate
+ Verify Certificate - Anyone can check the authenticity of the certificate and verify whether it was issued by the college
+ View Certificate Details - the individual can access their certificate details from the system
+ View Account Information - User will be able to see account address and its balance


In oder to try this app, follow the steps given below

# Replicate the above mobile dApp
## Clone tbe app and install the necessary packages
```
git clone git@github.com:sumukus/gcitCert.git gcitCert
cd gcitCert
npm i

```
## Create .env file 
Create the .env file in the root directory and add the following lines 
SMART_CONTRACT_ADDRESS=Your smart contract address 
INFURA_API=infura api for your app
CERTIFICATE_ISSUER=address of certificate issuer
  
