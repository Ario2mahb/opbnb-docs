---
sidebar_label: Run Node With Snapshot
description: Guide to running opBNB Node with snapshot
---

# Running the Node with Snapshot

To improve the synchronization speed of the node, you can utilize snapshots to initialize it. 

Snapshot download link:
### *Mainnet*
https://tf-bnbchain-prod-opbnb-mainnet-snapshot-s3-ap-northeast-1.s3.ap-northeast-1.amazonaws.com/geth-yyyymmdd.tar.gz

### *Testnet*
https://tf-nodereal-prod-opbnb-testnet-snapshot-s3-ap.s3.ap-northeast-1.amazonaws.com/geth-yyyymmdd.tar.gz

:::info
Snapshots are generated on a weekly basis and retained for 7 day each. Community developer NodeReal is responsible for creating and updating the testnet snapshot regularly.
:::


## Usage

### Step 1: Download the snapshot and decompress it.

```bash
wget -q -O - https://tf-bnbchain-prod-opbnb-mainnet-snapshot-s3-ap-northeast-1.s3.ap-northeast-1.amazonaws.com/geth-20231012.tar.gz | tar -xvf -
```

### Step 2: Replace the data.

1. Stop the running `op-geth` client, ensuring that it has completely shut down.
2. To back up the original data, execute the following commands:
    ```
    mv ${OPGeth_DataDir}/geth/chaindata ${OPGeth_DataDir}/geth/chaindata_backup
    mv ${OPGeth_DataDir}/geth/triecache ${OPGeth_DataDir}/geth/triecache_backup
    ```
3. Replace the data with the snapshot by running:
    ```
    mv ./geth/chaindata ${OPGeth_DataDir}/geth/chaindata
    mv ./geth/triecache ${OPGeth_DataDir}/geth/triecache
    ```
4. Restart the `op-geth` client and verify the logs.
