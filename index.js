const fs = require('fs');
const childProcess = require('child_process');
const os = require('os');

const accountMainnetJson = JSON.parse(fs.readFileSync('./account-mainnet.json', 'utf8'));
const accountRinkebyJson = JSON.parse(fs.readFileSync('./account-rinkeby.json', 'utf8'));

const networkInterfaces = os.networkInterfaces();
const eth0Interface = networkInterfaces.eth0;
const eth0Address = eth0Interface.address;

const mainnetNetworkId = 1338;
const sidechainNetworkId = 1337;

// geth --datadir rinkeby init genesis-rinkeby.json
// cp ./static-nodes-rinkeby.json ./rinkeby/static-nodes.json
// cp ./account-rinkeby.json ./rinkeby/keystore/UTC--2020-10-20T10-26-51.208063624Z--a57c89548a982eb90dda1d8069b73355c2effc34
// geth --datadir rinkeby --http --http.addr 172.31.2.5 --http.corsdomain '*' --mine --minerthreads 1 --miner.gasprice 0 --targetgaslimit '1000000000' --syncmode full --networkid 1337 --etherbase '0xa57c89548a982eb90dda1d8069b73355c2effc34' --allow-insecure-unlock --unlock '0xa57c89548a982eb90dda1d8069b73355c2effc34' --password ./password
const cpSidechain = childProcess.spawn('geth', [
	'--http',
	'--http.addr', eth0Address,
	'--http.corsdomain', '*',
	'--mine',
	'--minerthreads', '1',
	'--miner.gasprice', '0',
	'--targetgaslimit', '1000000000',
	'--nodiscover',
	'--syncmode', 'full',
	'--networkid', sidechainNetworkId + '',
	'--etherbase', '0x' + accountRinkebyJson.address,
	'--allow-insecure-unlock',
	'--unlock', '0x' + accountRinkebyJson.address,
	'--password', './password',
]);
cpSidechain.stdout.pipe(process.stdout);
cpSidechain.stderr.pipe(process.stderr);

// geth --datadir mainnet init genesis-mainnet.json
// cp ./static-nodes-mainnet.json ./rinkeby/static-nodes.json
// cp ./account-mainnet.json ./mainnet/keystore/UTC--2021-01-20T03-14-48.452051307Z--aae22cabdb635d6bfa1f6d19f921c783c90540c2
// geth --datadir mainnet --http --http.addr 172.31.2.5 --http.corsdomain '*' --mine --minerthreads 1 --miner.gasprice 0 --targetgaslimit '1000000000' --syncmode full --networkid 1338 --etherbase '0xaae22cabdb635d6bfa1f6d19f921c783c90540c2' --allow-insecure-unlock --unlock '0xaae22cabdb635d6bfa1f6d19f921c783c90540c2' --password ./password
/* const cpMainnet = childProcess.spawn('geth', [
	'--http',
	'--http.addr', eth0Address,
	'--http.corsdomain', '*',
	'--mine',
	'--minerthreads', '1',
	'--miner.gasprice', '0',
	'--targetgaslimit', '1000000000',
	'--nodiscover',
	'--syncmode', 'full',
	'--networkid', mainnetNetworkId + '',
	'--etherbase', '0x' + accountMainnetJson.address,
	'--allow-insecure-unlock',
	'--unlock', '0x' + accountMainnetJson.address,
	'--password', './password',
]); */