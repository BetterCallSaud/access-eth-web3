var Web3 = require("web3");
var fs = require('fs');

var provider = "MAINNET-INFURA-API-KEY";
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
