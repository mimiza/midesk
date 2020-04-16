# THIS PROJECT IS ABANDONED!

# WHAT IS MIDESK

> miDesk is an open source platform for selling membership and software subscriptions. It is written in NodeJS, using GunDB, VueJS, Semantic UI. This software is licensed under MIT license, that means you can do anything you want with it.

We aim to make it a NodeJS Decentrialized SAAS boilerplate in the future.

## This is a work in process
This project has just begun, many features are being built. We have no official release yet. If you are interested in giving contributions, feel free to send pull requests.

## There is no centrialized server
We use GunDB, a decentrialized graph database, which means each client is a server by itself and can contain a full copy of the whole database. There is no centrialized server. And if you are new to these words like P2P, Public/Private keys etc... please do some Google as well as reading GunDB docs.

## How about security?
Although each client could have a full copy of the whole database, all data is encrypted using Public/Private key encryption. The only way to decrypt a piece of data is using the private key that belongs to the same pair with the public key used to encrypt that piece of data. It takes 100+ years to bruteforce an encrypted piece of data.

Only you have access to your data. There is no one, even the creators of the system can read your data.

## How to install
``` bash
# install dependencies
npm install
# run
## dev environment with hot reload at localhost:8080
npm run dev
## c9 dev environment with hot reload
npm run devc9
## production environment with minification
npm run build
```

## Documentations
- GunDB: A realtime-decentrialized-graph database written in JS. Docs: [https://gun.eco/docs]
- VueJS: A view framework that helps building SPA shorter and faster. Docs: [https://vuejs.org/v2/guide/]
- Vue Loader: For detailed explanation on how things work, consult the [http://vuejs.github.io/vue-loader]
- Semantic UI: A UI framework that uses natural human language class names. Docs [https://semantic-ui.com/introduction/getting-started.html]
- Semantic UI Vue: Docs [https://semantic-ui-vue.github.io]

## Join the Community
- Chatroom: [https://gitter.im/mimiza/midesk]
