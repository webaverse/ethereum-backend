# ethereum-backend

The Webaverse Ethereum backend consists of a side chain that we mine using Proof-of-Stake.

To start a mining node, you must be an authorized miner address with a certificate installed in the `geth` data directory -- ask Avaer for the keys.

After that, it's `npm init` to boostrap the genesis, then `npm run miner` to run a miner.

`static-nodes-mainnet.json`` has some bootstrap nodes listed so you should be able to start syncing from those. Your chain will be "reorganized" a lot while you sync up, which is normal.

Replication is accomplished by having multiple nodes mine on that address at the same time. Note that geth does _not_ stream blocks to disk eagerly. A system crash will lose blocks on that node, though other miners will not be affects. To save blocks, side miners should be periodically restarted.

## blockchains

There are currently 4 chains that we use:

- `mainnet` (ETH mainnet)
- `mainnetsidechain` (our Geth nodes)
- `rinkeby` (ETH Rinkeby)
- `rinkebysidechain` (our Geth nodes)

mainnetsidechain: http://ethereum1.exokit.org:8545 chainId 1338 
rinkebysidechain: http://ethereum1.exokit.org:8546 chainId 1337

You can put these details into MetaMask directly to interact with the chains. There are no gas fees.
