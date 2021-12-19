require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind erosion hockey knee orange gas'; 
let testAccounts = [
"0xf596d75be3e538234574e35b06d63b37109a682193f3b9e7f35c38518681f141",
"0x04b3c13bc593367785d49816d0e3ad25291d87e9dfa76c5b14049d20ed5c0a10",
"0xf60f3ea13a59ab9ded85fdfc75fb5e448a935c666465f0e401c045911b3c2fb6",
"0x66445317d738c6bc414082f0ac2c1d03ef4a2679e9a78e1b681f2d57eb7b373c",
"0xdd7890eac83b80433bf131056fec6ae6ec2876193ec2e355945c5d788f868e0f",
"0x6d8230617883ed73f9433c9e3007c5cc94516fb8a915ba50d93eac8d2e91a84c",
"0x3c3339cb4d128bc0de7abcf5631a6259cb2e1ff74b486345eb60a8128ccc6fb7",
"0x8a869d3c773d7c359a1fc8c8ba6d958ca203c7dc5def122ff40a3b2b804a8d51",
"0x21bbb9b0a6bbabffc6a99d54e4c776386156c207e32a97f95eaddfb48a55dd16",
"0x5221720b20a1c4e5c967bd2984782078964f4da85aa2785725d127ecdc9a2f8f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


