/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  CTFExchange,
  CTFExchange_FeeCharged,
  CTFExchange_NewAdmin,
  CTFExchange_NewOperator,
  CTFExchange_OrderCancelled,
  CTFExchange_OrderFilled,
  CTFExchange_OrdersMatched,
  CTFExchange_ProxyFactoryUpdated,
  CTFExchange_RemovedAdmin,
  CTFExchange_RemovedOperator,
  CTFExchange_SafeFactoryUpdated,
  CTFExchange_TokenRegistered,
  CTFExchange_TradingPaused,
  CTFExchange_TradingUnpaused,
  ConditionalTokens,
  ConditionalTokens_ApprovalForAll,
  ConditionalTokens_ConditionPreparation,
  ConditionalTokens_ConditionResolution,
  ConditionalTokens_PayoutRedemption,
  ConditionalTokens_PositionSplit,
  ConditionalTokens_PositionsMerge,
  ConditionalTokens_TransferBatch,
  ConditionalTokens_TransferSingle,
  ConditionalTokens_URI,
  NegRiskCtfExchange,
  NegRiskCtfExchange_FeeCharged,
  NegRiskCtfExchange_NewAdmin,
  NegRiskCtfExchange_NewOperator,
  NegRiskCtfExchange_OrderCancelled,
  NegRiskCtfExchange_OrderFilled,
  NegRiskCtfExchange_OrdersMatched,
  NegRiskCtfExchange_ProxyFactoryUpdated,
  NegRiskCtfExchange_RemovedAdmin,
  NegRiskCtfExchange_RemovedOperator,
  NegRiskCtfExchange_SafeFactoryUpdated,
  NegRiskCtfExchange_TokenRegistered,
  NegRiskCtfExchange_TradingPaused,
  NegRiskCtfExchange_TradingUnpaused,
  UmaCtfAdapter,
  UmaCtfAdapter_AncillaryDataUpdated,
  UmaCtfAdapter_NewAdmin,
  UmaCtfAdapter_QuestionEmergencyResolved,
  UmaCtfAdapter_QuestionFlagged,
  UmaCtfAdapter_QuestionInitialized,
  UmaCtfAdapter_QuestionPaused,
  UmaCtfAdapter_QuestionReset,
  UmaCtfAdapter_QuestionResolved,
  UmaCtfAdapter_QuestionUnflagged,
  UmaCtfAdapter_QuestionUnpaused,
  UmaCtfAdapter_RemovedAdmin,
  UmaCtfAdapterV2,
  UmaCtfAdapterV2_AncillaryDataUpdated,
  UmaCtfAdapterV2_NewAdmin,
  UmaCtfAdapterV2_QuestionEmergencyResolved,
  UmaCtfAdapterV2_QuestionFlagged,
  UmaCtfAdapterV2_QuestionInitialized,
  UmaCtfAdapterV2_QuestionPaused,
  UmaCtfAdapterV2_QuestionReset,
  UmaCtfAdapterV2_QuestionResolved,
  UmaCtfAdapterV2_QuestionUnpaused,
  UmaCtfAdapterV2_RemovedAdmin,
} from "generated";

CTFExchange.FeeCharged.handler(async ({ event, context }) => {
  const entity: CTFExchange_FeeCharged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    receiver: event.params.receiver,
    tokenId: event.params.tokenId,
    amount: event.params.amount,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_FeeCharged.set(entity);
});

CTFExchange.NewAdmin.handler(async ({ event, context }) => {
  const entity: CTFExchange_NewAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAdminAddress: event.params.newAdminAddress,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_NewAdmin.set(entity);
});

CTFExchange.NewOperator.handler(async ({ event, context }) => {
  const entity: CTFExchange_NewOperator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newOperatorAddress: event.params.newOperatorAddress,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_NewOperator.set(entity);
});

CTFExchange.OrderCancelled.handler(async ({ event, context }) => {
  const entity: CTFExchange_OrderCancelled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderHash: event.params.orderHash,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_OrderCancelled.set(entity);
});

CTFExchange.OrderFilled.handler(async ({ event, context }) => {
  const entity: CTFExchange_OrderFilled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderHash: event.params.orderHash,
    maker: event.params.maker,
    taker: event.params.taker,
    makerAssetId: event.params.makerAssetId,
    takerAssetId: event.params.takerAssetId,
    makerAmountFilled: event.params.makerAmountFilled,
    takerAmountFilled: event.params.takerAmountFilled,
    fee: event.params.fee,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_OrderFilled.set(entity);
});

CTFExchange.OrdersMatched.handler(async ({ event, context }) => {
  const entity: CTFExchange_OrdersMatched = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    takerOrderHash: event.params.takerOrderHash,
    takerOrderMaker: event.params.takerOrderMaker,
    makerAssetId: event.params.makerAssetId,
    takerAssetId: event.params.takerAssetId,
    makerAmountFilled: event.params.makerAmountFilled,
    takerAmountFilled: event.params.takerAmountFilled,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_OrdersMatched.set(entity);
});

CTFExchange.ProxyFactoryUpdated.handler(async ({ event, context }) => {
  const entity: CTFExchange_ProxyFactoryUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldProxyFactory: event.params.oldProxyFactory,
    newProxyFactory: event.params.newProxyFactory,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_ProxyFactoryUpdated.set(entity);
});

CTFExchange.RemovedAdmin.handler(async ({ event, context }) => {
  const entity: CTFExchange_RemovedAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    removedAdmin: event.params.removedAdmin,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_RemovedAdmin.set(entity);
});

CTFExchange.RemovedOperator.handler(async ({ event, context }) => {
  const entity: CTFExchange_RemovedOperator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    removedOperator: event.params.removedOperator,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_RemovedOperator.set(entity);
});

CTFExchange.SafeFactoryUpdated.handler(async ({ event, context }) => {
  const entity: CTFExchange_SafeFactoryUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldSafeFactory: event.params.oldSafeFactory,
    newSafeFactory: event.params.newSafeFactory,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_SafeFactoryUpdated.set(entity);
});

CTFExchange.TokenRegistered.handler(async ({ event, context }) => {
  const entity: CTFExchange_TokenRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    conditionId: event.params.conditionId,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_TokenRegistered.set(entity);
});

CTFExchange.TradingPaused.handler(async ({ event, context }) => {
  const entity: CTFExchange_TradingPaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_TradingPaused.set(entity);
});

CTFExchange.TradingUnpaused.handler(async ({ event, context }) => {
  const entity: CTFExchange_TradingUnpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
    blockTime: Number(event.block.timestamp),
  };

  context.CTFExchange_TradingUnpaused.set(entity);
});

ConditionalTokens.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_ApprovalForAll.set(entity);
});

ConditionalTokens.ConditionPreparation.handler(async ({ event, context }) => {
  // only index questions from polymarket oracles
  const oracles = [
    "0x2F5e3684cb1F318ec51b00Edba38d79Ac2c0aA9d",
    "0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74",
  ];

  if (!oracles.includes(event.params.oracle)) {
    return;
  }

  const entity: ConditionalTokens_ConditionPreparation = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    conditionId: event.params.conditionId,
    oracle: event.params.oracle,
    questionId: event.params.questionId,
    outcomeSlotCount: event.params.outcomeSlotCount,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_ConditionPreparation.set(entity);
});

ConditionalTokens.ConditionResolution.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_ConditionResolution = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    conditionId: event.params.conditionId,
    oracle: event.params.oracle,
    questionId: event.params.questionId,
    outcomeSlotCount: event.params.outcomeSlotCount,
    payoutNumerators: event.params.payoutNumerators,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_ConditionResolution.set(entity);
});

ConditionalTokens.PayoutRedemption.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_PayoutRedemption = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    redeemer: event.params.redeemer,
    collateralToken: event.params.collateralToken,
    parentCollectionId: event.params.parentCollectionId,
    conditionId: event.params.conditionId,
    indexSets: event.params.indexSets,
    payout: event.params.payout,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_PayoutRedemption.set(entity);
});

ConditionalTokens.PositionSplit.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_PositionSplit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stakeholder: event.params.stakeholder,
    collateralToken: event.params.collateralToken,
    parentCollectionId: event.params.parentCollectionId,
    conditionId: event.params.conditionId,
    partition: event.params.partition,
    amount: event.params.amount,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_PositionSplit.set(entity);
});

ConditionalTokens.PositionsMerge.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_PositionsMerge = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stakeholder: event.params.stakeholder,
    collateralToken: event.params.collateralToken,
    parentCollectionId: event.params.parentCollectionId,
    conditionId: event.params.conditionId,
    partition: event.params.partition,
    amount: event.params.amount,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_PositionsMerge.set(entity);
});

ConditionalTokens.TransferBatch.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_TransferBatch = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    values: event.params.values,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_TransferBatch.set(entity);
});

ConditionalTokens.TransferSingle.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_TransferSingle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    value: event.params.value,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_TransferSingle.set(entity);
});

ConditionalTokens.URI.handler(async ({ event, context }) => {
  const entity: ConditionalTokens_URI = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
    event_id: event.params.id,
    blockTime: Number(event.block.timestamp),
  };

  context.ConditionalTokens_URI.set(entity);
});

NegRiskCtfExchange.FeeCharged.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_FeeCharged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    receiver: event.params.receiver,
    tokenId: event.params.tokenId,
    amount: event.params.amount,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_FeeCharged.set(entity);
});

NegRiskCtfExchange.NewAdmin.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_NewAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAdminAddress: event.params.newAdminAddress,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_NewAdmin.set(entity);
});

NegRiskCtfExchange.NewOperator.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_NewOperator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newOperatorAddress: event.params.newOperatorAddress,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_NewOperator.set(entity);
});

NegRiskCtfExchange.OrderCancelled.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_OrderCancelled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderHash: event.params.orderHash,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_OrderCancelled.set(entity);
});

NegRiskCtfExchange.OrderFilled.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_OrderFilled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderHash: event.params.orderHash,
    maker: event.params.maker,
    taker: event.params.taker,
    makerAssetId: event.params.makerAssetId,
    takerAssetId: event.params.takerAssetId,
    makerAmountFilled: event.params.makerAmountFilled,
    takerAmountFilled: event.params.takerAmountFilled,
    fee: event.params.fee,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_OrderFilled.set(entity);
});

NegRiskCtfExchange.OrdersMatched.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_OrdersMatched = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    takerOrderHash: event.params.takerOrderHash,
    takerOrderMaker: event.params.takerOrderMaker,
    makerAssetId: event.params.makerAssetId,
    takerAssetId: event.params.takerAssetId,
    makerAmountFilled: event.params.makerAmountFilled,
    takerAmountFilled: event.params.takerAmountFilled,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_OrdersMatched.set(entity);
});

NegRiskCtfExchange.ProxyFactoryUpdated.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_ProxyFactoryUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldProxyFactory: event.params.oldProxyFactory,
    newProxyFactory: event.params.newProxyFactory,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_ProxyFactoryUpdated.set(entity);
});

NegRiskCtfExchange.RemovedAdmin.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_RemovedAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    removedAdmin: event.params.removedAdmin,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_RemovedAdmin.set(entity);
});

NegRiskCtfExchange.RemovedOperator.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_RemovedOperator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    removedOperator: event.params.removedOperator,
    admin: event.params.admin,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_RemovedOperator.set(entity);
});

NegRiskCtfExchange.SafeFactoryUpdated.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_SafeFactoryUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldSafeFactory: event.params.oldSafeFactory,
    newSafeFactory: event.params.newSafeFactory,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_SafeFactoryUpdated.set(entity);
});

NegRiskCtfExchange.TokenRegistered.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_TokenRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    conditionId: event.params.conditionId,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_TokenRegistered.set(entity);
});

NegRiskCtfExchange.TradingPaused.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_TradingPaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_TradingPaused.set(entity);
});

NegRiskCtfExchange.TradingUnpaused.handler(async ({ event, context }) => {
  const entity: NegRiskCtfExchange_TradingUnpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
    blockTime: Number(event.block.timestamp),
  };

  context.NegRiskCtfExchange_TradingUnpaused.set(entity);
});

UmaCtfAdapter.AncillaryDataUpdated.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_AncillaryDataUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    owner: event.params.owner,
    update: event.params.update,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_AncillaryDataUpdated.set(entity);
});

UmaCtfAdapter.NewAdmin.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_NewAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    admin: event.params.admin,
    newAdminAddress: event.params.newAdminAddress,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_NewAdmin.set(entity);
});

UmaCtfAdapter.QuestionEmergencyResolved.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionEmergencyResolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    payouts: event.params.payouts,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionEmergencyResolved.set(entity);
});

UmaCtfAdapter.QuestionFlagged.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionFlagged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionFlagged.set(entity);
});

UmaCtfAdapter.QuestionInitialized.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionInitialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    requestTimestamp: event.params.requestTimestamp,
    creator: event.params.creator,
    ancillaryData: event.params.ancillaryData,
    rewardToken: event.params.rewardToken,
    reward: event.params.reward,
    proposalBond: event.params.proposalBond,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionInitialized.set(entity);
});

UmaCtfAdapter.QuestionPaused.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionPaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionPaused.set(entity);
});

UmaCtfAdapter.QuestionReset.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionReset = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionReset.set(entity);
});

UmaCtfAdapter.QuestionResolved.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionResolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    settledPrice: event.params.settledPrice,
    payouts: event.params.payouts,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionResolved.set(entity);
});

UmaCtfAdapter.QuestionUnflagged.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionUnflagged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionUnflagged.set(entity);
});

UmaCtfAdapter.QuestionUnpaused.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_QuestionUnpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_QuestionUnpaused.set(entity);
});

UmaCtfAdapter.RemovedAdmin.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapter_RemovedAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    admin: event.params.admin,
    removedAdmin: event.params.removedAdmin,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapter_RemovedAdmin.set(entity);
});

UmaCtfAdapterV2.AncillaryDataUpdated.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_AncillaryDataUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    owner: event.params.owner,
    update: event.params.update,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_AncillaryDataUpdated.set(entity);
});

UmaCtfAdapterV2.NewAdmin.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_NewAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    admin: event.params.admin,
    newAdminAddress: event.params.newAdminAddress,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_NewAdmin.set(entity);
});

UmaCtfAdapterV2.QuestionEmergencyResolved.handler(
  async ({ event, context }) => {
    const entity: UmaCtfAdapterV2_QuestionEmergencyResolved = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      questionID: event.params.questionID,
      payouts: event.params.payouts,
      blockTime: Number(event.block.timestamp),
    };

    context.UmaCtfAdapterV2_QuestionEmergencyResolved.set(entity);
  }
);

UmaCtfAdapterV2.QuestionFlagged.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_QuestionFlagged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_QuestionFlagged.set(entity);
});

UmaCtfAdapterV2.QuestionInitialized.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_QuestionInitialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    requestTimestamp: event.params.requestTimestamp,
    creator: event.params.creator,
    ancillaryData: event.params.ancillaryData,
    rewardToken: event.params.rewardToken,
    reward: event.params.reward,
    proposalBond: event.params.proposalBond,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_QuestionInitialized.set(entity);
});

UmaCtfAdapterV2.QuestionPaused.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_QuestionPaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_QuestionPaused.set(entity);
});

UmaCtfAdapterV2.QuestionReset.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_QuestionReset = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_QuestionReset.set(entity);
});

UmaCtfAdapterV2.QuestionResolved.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_QuestionResolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    settledPrice: event.params.settledPrice,
    payouts: event.params.payouts,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_QuestionResolved.set(entity);
});

UmaCtfAdapterV2.QuestionUnpaused.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_QuestionUnpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    questionID: event.params.questionID,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_QuestionUnpaused.set(entity);
});

UmaCtfAdapterV2.RemovedAdmin.handler(async ({ event, context }) => {
  const entity: UmaCtfAdapterV2_RemovedAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    admin: event.params.admin,
    removedAdmin: event.params.removedAdmin,
    blockTime: Number(event.block.timestamp),
  };

  context.UmaCtfAdapterV2_RemovedAdmin.set(entity);
});
