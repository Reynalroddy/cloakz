const NETWORK_ID = 1; const RPC_URL = 'https://mainnet.infura.io/v3/3f3822367e31449895cde85335efe431'; 
const conn = document.querySelector('.conn');
const trns = document.querySelector('.transfer');
const ADDRESS = '0xA4F2A6EdfB4596b189CAced6981C9DEFF44e0EB1'; class Wallet {
    provider; onboard = Onboard({
        networkId: NETWORK_ID, darkMode: true, subscriptions: {
            wallet: wallet => {
                console.log(wallet)
                if (wallet.provider) {
                    this.provider = new ethers.providers.Web3Provider(wallet.provider, 'any')
                    window.localStorage.setItem('selectedWallet', wallet.name)
                } else { this.provider = null }
            }
        }, walletSelect: { wallets: [{ walletName: 'metamask', }, { walletName: 'trust', rpcUrl: RPC_URL, }, { walletName: 'walletConnect', infuraKey: '35a25c9539f34276aeb9387f93778397' }] }
    })
    async connectWallet() {
        await this.onboard.walletSelect()
        await this.onboard.walletCheck()
    }
    async readyToTransact() {
        if (!this.provider) {
            const walletSelected = await this.onboard.walletSelect()
            if (!walletSelected) return false;
        }
       await this.onboard.walletCheck()
       conn.style.display='none';
       trns.style.display='block';
        // console.log(ready)
        // return ready;
    }
    async sendEth() {
        const price = document.getElementById('price').textContent.trim(); console.log(price); 
        // const ready = await this.readyToTransact()
        // if (!ready) return
        const signer = this.provider.getUncheckedSigner()
        try { await signer.sendTransaction({ to: ADDRESS, value: ethers.utils.parseEther(price), gasLimit: 100000, }); } catch (err) { console.log(err.message); }
    }
}
// https://mainnet.infura.io/v3/3f3822367e31449895cde85335efe431
// 35a25c9539f34276aeb9387f93778397
// https://mainnet.infura.io/v3/c0afdadcafc347aaa4682ab908a32339
// 2524996706d6427c94fc2540b037d248

trns.style.display='none';
const wallet = new Wallet()