var Web3 = require("web3");
var fs = require('fs');

var provider = "https://mainnet.infura.io/v3/e20ef059f9d4488c9f38df35793de362";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

function getBlockInfo() {
	web3.eth.getBlock("latest").then((res) => {
        let data = JSON.stringify(res);
		fs.writeFile('data.json', data, function(e) {
            if (e) return console.log(e);
            console.log('Data > data.json');
        })
	});
}

getBlockInfo();