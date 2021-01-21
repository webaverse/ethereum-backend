# ethereum-backend

The Webaverse Ethereum backend consists of a side chain that we mine using Proof-of-Stake.

To start a mining node, you must be an authorized miner address with a certificate installed in the `geth` data directory -- ask Avaer for the keys.

To validate/replicate/sync you don't need any keys.

## commands

Here is how to bootstrap a mainnet validation node:

```bash
geth --datadir mainnet init genesis-mainnet.json
cp ./static-nodes-mainnet.json ./mainnet/static-nodes.json
geth --datadir mainnet --http --http.addr 172.31.2.5 --http.corsdomain '*' --syncmode full --networkid 1338
```

`static-nodes-mainnet.json`` has some bootstrap nodes listed so you should be able to start syncing from those. Your chain will be "reorganized" a lot while you sync up, which is normal.

## blockchains

There are currently 4 chains that we use:

- `mainnet` (ETH mainnet)
- `mainnetsidechain` (our Geth nodes)
- `rinkeby` (ETH Rinkeby)
- `rinkebysidechain` (our Geth nodes)

`mainnetsidechain`: http://ethereum1.exokit.org:8545 chainId 1338 
`rinkebysidechain`: http://ethereum1.exokit.org:8546 chainId 1337

You can put these details into MetaMask directly to interact with the chains. There are no gas fees.

These networks also have HTTPS proxy support for secure frontend development:

https://mainnetsidechain.exokit.org
https://rinkebysidechain.exokit.org

Note that the port on these is the standard HTTPS port, `443`.

## note on atomic saves

Replication is accomplished by having multiple nodes mine on that address at the same time.

`geth` does _not_ stream blocks to disk eagerly. A system crash will lose blocks on that node, though other miners will not be affected.
