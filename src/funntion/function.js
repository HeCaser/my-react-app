var EtherWallet = require('debeem-id')

export function createWalletFromMnemonic() {
    return JSON.stringify(EtherWallet.EtherWallet.createWalletFromMnemonic())
}

window.createWalletFromMnemonic = createWalletFromMnemonic;