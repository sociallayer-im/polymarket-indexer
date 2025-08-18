import assert from "assert";
import { 
  TestHelpers,
  CTFExchange_FeeCharged
} from "generated";
const { MockDb, CTFExchange } = TestHelpers;

describe("CTFExchange contract FeeCharged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for CTFExchange contract FeeCharged event
  const event = CTFExchange.FeeCharged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("CTFExchange_FeeCharged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await CTFExchange.FeeCharged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualCTFExchangeFeeCharged = mockDbUpdated.entities.CTFExchange_FeeCharged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedCTFExchangeFeeCharged: CTFExchange_FeeCharged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      receiver: event.params.receiver,
      tokenId: event.params.tokenId,
      amount: event.params.amount,
      blockTime: Number(event.block.timestamp),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualCTFExchangeFeeCharged, expectedCTFExchangeFeeCharged, "Actual CTFExchangeFeeCharged should be the same as the expectedCTFExchangeFeeCharged");
  });
});
