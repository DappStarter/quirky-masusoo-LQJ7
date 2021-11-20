require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name repeat magic huge inflict kiwi slot genuine'; 
let testAccounts = [
"0x65450ac5f45458b54eb267580575f3bdf4984f46ebe7491dd57af9c5c00d9cb7",
"0x4969af8c2ec7f713d1cde79245b147a075d22d6126bd25e93c0bcc1c0f321e87",
"0x245c2f6cc9ce948ddc4731e414e5bc4c9be485fa7738d2a203c1792d75e64682",
"0xe15ffbcf7f2420e4a81b7b809246d0a029820f40cf2ea2dfa8799a7ebf191af4",
"0x76ac96811dc37397b7cabbd222ce39f057b3a29f0202d9c781d753f831321bd1",
"0x268d49b70f26a8e00dcaa7577a7847627cb17e39395cfe44af3218554bc66921",
"0x192d99cce320a4ff03af892598133a35d051a027b0d9a291b15ae5798a29957a",
"0xd4cd0ea32861f0855bf3aa95826bb00291b397ac66ce85c500020e552be84cb2",
"0x2a2ca7df83bacf47d20dec4960c79085805a9040babe787b64e3f32f81e1b860",
"0x277ee2517fe3e2996953b827f0322ad3a281b045c0e2d3f966e8410eb516feea"
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


