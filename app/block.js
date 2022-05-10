async function connect(){
    // await window.web3.currentProvider.enable();
    // let web3 = new Web3(Web3.givenProvider);
    const account = await ethereum.request({ method: 'eth_requestAccounts' });
    const addressNode = document.querySelector('#address')
    console.log("My account : ", account[0])
    const firstAccount = account[0]
    const shortAddress = `${firstAccount.substr(0,5)}...${firstAccount.substr(38,4)}`

    addressNode.innerHTML = `<button id="copyAddress" type="button" class="btn btn-outline-light btn-lg download-btn">
                                ${shortAddress}
                            </button>`
                            
    document.querySelector('#copyAddress').addEventListener('click', ()=>{
        copyAddress(firstAccount)
    })



}    


async function donate(){
    const transactionParameters = {
        to: '0x09785Ab635B6880E587D3F53a5605919108C2Dcb', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0x2386f26fc10000', // (10**16).toString(16) -- Only required to send ether to the recipient from the initiating external account.
        chainId: '0x1', //  0x89 -polygon -- Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        gas: '21000'
      };
      
      // txHash is a hex string
      // As with any RPC call, it may throw an error
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
}

async function copyAddress(address){
    await navigator.clipboard.writeText(address)
    console.log("Address copied : ", address);
}
