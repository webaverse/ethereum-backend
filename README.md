# ethereum-backend

The Webaverse Ethereum backend consists of a side chain that we mine using Proof-of-Stake.

To start a mining node, you must be an authorized miner address with a certificate installed in the `geth` data directory -- ask Avaer for the keys.

After that, it's `npm init` to boostrap the genesis, then `npm run miner` to run a miner. `static-nodes.json` has some bootstrap nodes listed so you should be able to start syncing from those. The longest chain wins so keep in mind your chain will be "reorganized" a lot while you sync up, which is normal.

The main node is at http://ethereum.exokit.org:8545, chain ID 1337. You can put these details into MetaMask as a custom RPC node to interact with the chain.

Additional nodes are running at http://ethereum[1-n].exokit.org:8545, whose identities are listed in `static-nodes.json`, a file `geth` uses to bootstrap into the newtwork.

Replication is accomplished by having multiple nodes mine on that address at the same time. Note that geth does _not_ stream blocks to disk eagerly. A system crash will lose blocks on that node, though other miners will not be affects. To save blocks, side miners should be periodically restarted.
