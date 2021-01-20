const childProcess = require('child_process');
const os = require('os');

const networkInterfaces = os.networkInterfaces();
const eth0Interface = networkInterfaces.eth0;
const eth0Address = eth0Interface.address;

const cp = childProcess.spawn('geth', [
	'--datadir', 'mainnet',
	'--http',
	'--http.addr', eth0Address,
	'--http.corsdomain', '*',
	'--mine',
	'--minerthreads', '1',
	'--miner.gasprice', '0',
	'--syncmode', 'full',
	'--etherbase', '0xA57c89548A982eB90dDA1D8069b73355c2EffC34',
	'--allow-insecure-unlock',
	'--unlock', '0xA57c89548A982eB90dDA1D8069b73355c2EffC34',
	'--password',
	'./password',
]);