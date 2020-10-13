const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config()

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
    //networks: {
    //  development: {
    //    host: "127.0.0.1",
    //    port: 7545,
    //    network_id: "*"
    //  },
    //  test: {
    //    host: "127.0.0.1",
    //    port: 7545,
    //    network_id: "*"
    //  }
    //}
    //
    networks: {
        ropsten: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNENOMIC,
                    "https://ropsten.infura.io/v3/" + process.env.API_KEY
                );
            },
            network_id: 3,
            gas: 3000000,
            gasPrice: 10000000000
        },
        kovan: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNENOMIC,
                    "https://kovan.infura.io/v3/" + process.env.API_KEY
                );
            },
            network_id: 42,
            gas: 3000000,
            gasPrice: 10000000000
        },
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        }
    },
    compilers: {
        solc: {
            version: "^0.6.0"
        }
    }
};
