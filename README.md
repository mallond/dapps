# dapp

> This Repo also contains the Banner site for this repository. Single page HTML file with some propaganda. 
 [www.dapplog.com](http://www.dapplog.com/)

Decentralized Application for an Immutable State Machine

## Stack
- IPFS [InterPlanetary File System](https://ipfs.io/)
- Lisk [Lisk Blockchain](https://lisk.io/)
- Process State Machine [BizRez.com] (http://bizrez.com)
- RabbitMQ [rabbit](https://www.rabbitmq.com/)
- Docker [dock](https://www.docker.com/)
- InterPlanetary consumer market - WIP$
- Node, Restify, MongoDB, React

![Start Flow](https://github.com/mallond/dapp/blob/master/processDapp.png)

# General Process Flow

Initial Flow

- Encrypt secure content director to document
- Sign document
- Publish content director
- Publish content director hash to Interplanetary Naming System

Continues Update of Transactions

- Write transactions to secure content directory
- Encrypt content director to document
- Sign document
- Publish content director

# IPFS Development Getting Started 

Install globally 

$ npm install ipfs --global

Start the deamon 

$ ipfs daemon

Fancy Web Console

http://localhost:5001/webui

Use Interplanetary Naming System

$ ipfs name publish <that hash>

http://gateway.ipfs.io/ipns/<your peer ID>

http://gateway.ipfs.io/ipns/Qmeg7VoDaso6Rbq2KG6i2PHHp3rWy4cd4NDpMmWS6MsMr5

# ECDSA Elliptic Curve Digital Signature Algorithm - used by Bitcoin







