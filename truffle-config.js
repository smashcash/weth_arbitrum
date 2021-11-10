require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const utils = require('web3-utils')
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.

    development: {
      host: '127.0.0.1',     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: '*',       // Any network (default: none)
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://arb1.arbitrum.io/rpc'),
      network_id: 42161,
      //confirmations: 2,
      networkCheckTimeout: 9000000,
      timeoutBlocks: 4000,
      skipDryRun: true,
      gas: 100000000,
      gasPrice: utils.toWei('1', 'gwei'),
     },
 
     // Useful for deploying to a public network.
     // NB: It's important to wrap the provider as a function.
     rinkeby: {
       provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://rinkeby.arbitrum.io/rpc'),
       network_id: 421611,
       //confirmations: 2,
       networkCheckTimeout: 9000000,
       timeoutBlocks: 4000,
       skipDryRun: false,
       gas: 100000000,
       gasPrice: utils.toWei('0.02', 'gwei'),
     }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.17',    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        // evmVersion: "byzantium"
      }
    },
    external: {
      command: 'node ./compileHasher.js',
      targets: [{
        path: './build/Hasher.json'
      }]
    }
  }
}
