import fetch from "node-fetch";

globalThis.fetch = fetch;

export * from "./client/SixDataChainConnector";
export * from "./helper/base64";
// legacy code will be replicated and replaced with typesTxNFTManager
export * as ITxNFTmngr from "./modules/sixprotocol.nftmngr/types/sixprotocol/nftmngr/tx";
// legacy code will be replicated and replaced with typesTxNFTAdmin
export * as ITxNFTadmin from "./modules/sixprotocol.nftadmin/types/sixprotocol/nftadmin/tx";
// legacy code will be replicated and replaced with typesTxNFTOracle
export * as fee from "@cosmjs/stargate/build/fee";

// ############### COSMOSSDK ###############
// ################### TX ##################
export * as typesTxCosmosAuth from "./modules/cosmos.auth.v1beta1/types/cosmos/auth/v1beta1/tx";
export * as typesTxCosmosAuthz from "./modules/cosmos.authz.v1beta1/types/cosmos/authz/v1beta1/tx";
export * as typesTxBank from "./modules/cosmos.bank.v1beta1/types/cosmos/bank/v1beta1/tx";
export * as typesTxCosmosBank from "./modules/cosmos.bank.v1beta1/types/cosmos/bank/v1beta1/tx";
export * as typesTxCosmosCrisis from "./modules/cosmos.crisis.v1beta1/types/cosmos/crisis/v1beta1/tx";
export * as typesTxCosmosDistribution from "./modules/cosmos.distribution.v1beta1/types/cosmos/distribution/v1beta1/tx";
export * as typesTxCosmosEvidence from "./modules/cosmos.evidence.v1beta1/types/cosmos/evidence/v1beta1/tx";
export * as typesTxCosmosFeeGrant from "./modules/cosmos.feegrant.v1beta1/types/cosmos/feegrant/v1beta1/tx";
export * as typesTxCosmosGov from "./modules/cosmos.gov.v1beta1/types/cosmos/gov/v1beta1/tx";
// DISABLE THIS FEATURE FOR PUBLIC export * as typesTxCosmosMint from "./modules/cosmos/cosmos-sdk/cosmos.mint.v1beta1/types/cosmos/mint/v1beta1/mint"
export * as typesTxParams from "./modules/cosmos.params.v1beta1/types/cosmos/params/v1beta1/params";
export * as typesTxCosmosSlashing from "./modules/cosmos.slashing.v1beta1/types/cosmos/slashing/v1beta1/tx";
export * as typesTxCosmosStaking from "./modules/cosmos.staking.v1beta1/types/cosmos/staking/v1beta1/tx";
export * as typesTxCosmosUpgrade from "./modules/cosmos.upgrade.v1beta1/types/cosmos/upgrade/v1beta1/upgrade";
export * as typesTxCosmosVesting from "./modules/cosmos.vesting.v1beta1/types/cosmos/vesting/v1beta1/tx";

// ############### Query ################
export * as typesQueryCosmosAuth from "./modules/cosmos.auth.v1beta1/types/cosmos/auth/v1beta1/query";
export * as typesQueryCosmosAuthz from "./modules/cosmos.authz.v1beta1/types/cosmos/authz/v1beta1/query";
export * as typesQueryCosmosBank from "./modules/cosmos.bank.v1beta1/types/cosmos/bank/v1beta1/query";
// NONE export * as typesQueryCosmosCrisis from "./modules/cosmos/cosmos-sdk/cosmos.crisis.v1beta1/types/cosmos/crisis/v1beta1/genesis"
export * as typesQueryCosmosDistribution from "./modules/cosmos.distribution.v1beta1/types/cosmos/distribution/v1beta1/query";
export * as typesQueryCosmosEvidence from "./modules/cosmos.evidence.v1beta1/types/cosmos/evidence/v1beta1/query";
export * as typesQueryCosmosFeeGrant from "./modules/cosmos.feegrant.v1beta1/types/cosmos/feegrant/v1beta1/query";
export * as typesQueryCosmosGov from "./modules/cosmos.gov.v1beta1/types/cosmos/gov/v1beta1/query";
// DISABLE THIS FEATURE FOR PUBLIC export * as typesQueryCosmosMint from "./modules/cosmos/cosmos-sdk/cosmos.mint.v1beta1/types/cosmos/mint/v1beta1/mint"
export * as typesQueryParams from "./modules/cosmos.params.v1beta1/types/cosmos/params/v1beta1/query";
export * as typesQueryCosmosSlashing from "./modules/cosmos.slashing.v1beta1/types/cosmos/slashing/v1beta1/query";
export * as typesQueryCosmosStaking from "./modules/cosmos.staking.v1beta1/types/cosmos/staking/v1beta1/query";
export * as typesQueryCosmosUpgrade from "./modules/cosmos.upgrade.v1beta1/types/cosmos/upgrade/v1beta1/query";
export * as typesQueryCosmosVesting from "./modules/cosmos.vesting.v1beta1/types/cosmos/vesting/v1beta1/vesting";

// ############### ETHERMINT ###############
// ################### TX ##################
export * as typesTxEthermintEvm from "./modules/ethermint.evm.v1/types/ethermint/evm/v1/tx";
export * as typesTxEthermintFeemarket from "./modules/ethermint.feemarket.v1/types/ethermint/feemarket/v1/feemarket";

// ############### Query ################
export * as typesQueryEthermintEvm from "./modules/ethermint.evm.v1/types/ethermint/evm/v1/query";
export * as typesQueryEthermintFeemarket from "./modules/ethermint.feemarket.v1/types/ethermint/feemarket/v1/query";

// ############### EVMOS ###############

// ############### TENDERMINT IBC ###############
// ################### TX ##################
export * as typesTxIBCAccountController from "./modules/ibc.applications.interchain_accounts.controller.v1/types/ibc/applications/interchain_accounts/controller/v1/controller";
export * as typesTxIBCAccountHots from "./modules/ibc.applications.interchain_accounts.host.v1/types/ibc/applications/interchain_accounts/host/v1/host";
export * as typesTxIBCTransfer from "./modules/ibc.applications.transfer.v1/types/ibc/applications/transfer/v1/tx";
export * as typesTxIBCChannel from "./modules/ibc.core.channel.v1/types/ibc/core/channel/v1/tx";
export * as typesTxIBCClient from "./modules/ibc.core.client.v1/types/ibc/core/client/v1/client";
export * as typesTxIBCConnection from "./modules/ibc.core.connection.v1/types/ibc/core/connection/v1/tx";

// ############### Query ################
export * as typesQueryIBCAccountController from "./modules/ibc.applications.interchain_accounts.controller.v1/types/ibc/applications/interchain_accounts/controller/v1/query";
export * as typesQueryIBCAccountHots from "./modules/ibc.applications.interchain_accounts.host.v1/types/ibc/applications/interchain_accounts/host/v1/query";
export * as typesQueryIBCTransfer from "./modules/ibc.applications.transfer.v1/types/ibc/applications/transfer/v1/query";
export * as typesQueryIBCChannel from "./modules/ibc.core.channel.v1/types/ibc/core/channel/v1/query";
export * as typesQueryIBCClient from "./modules/ibc.core.client.v1/types/ibc/core/client/v1/query";
export * as typesQueryIBCConnection from "./modules/ibc.core.connection.v1/types/ibc/core/connection/v1/query";

// ################### CORE ##################
export * as typesCoreIBCTransferCore from "./modules/ibc.applications.transfer.v1/types/ibc/core/client/v1/client";
export * as typesCoreIBCChannel from "./modules/ibc.core.channel.v1/types/ibc/core/channel/v1/channel";

// ############### SIX PROTOCOL ###############
// ################### TX ##################
export * as typesTxProtocolAdmin from "./modules/sixprotocol.protocoladmin/types/sixprotocol/protocoladmin/tx";
export * as typesTxTokenManager from "./modules/sixprotocol.tokenmngr/types/sixprotocol/tokenmngr/tx";

// ################### Query ##################
export * as typesQueryProtocolAdmin from "./modules/sixprotocol.protocoladmin/types/sixprotocol/protocoladmin/query";
export * as typesQueryTokenManager from "./modules/sixprotocol.tokenmngr/types/sixprotocol/tokenmngr/query";

// ############### SIXNFT ###############
// ################### TX ##################
// legacy code will be replicated and replaced with typesTxNFTOracle
export * as typesTxNFTAdmin from "./modules/sixprotocol.nftadmin/types/sixprotocol/nftadmin/tx";
export * as typesTxNFTManager from "./modules/sixprotocol.nftmngr/types/sixprotocol/nftmngr/tx";
export * as ITxNFToracle from "./modules/sixprotocol.nftoracle/types/sixprotocol/nftoracle/tx";
export * as typesTxNFTOracle from "./modules/sixprotocol.nftoracle/types/sixprotocol/nftoracle/tx";

// ################### Query ##################
export * as typesQueryNFTAdmin from "./modules/sixprotocol.nftadmin/types/sixprotocol/nftadmin/query";
export * as typesQueryNFTManager from "./modules/sixprotocol.nftmngr/types/sixprotocol/nftmngr/query";
export * as typesQueryNFTOracle from "./modules/sixprotocol.nftoracle/types/sixprotocol/nftoracle/query";
