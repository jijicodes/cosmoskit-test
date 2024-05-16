import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "@cosmos-kit/core";

export const UseChainAccountMenu = (): JSX.Element => {
  const {
    status,
    address,
    disconnect,
    connect,
    isWalletConnected: connected,
  } = useChain("osmosis");

  console.log("useChain", { status, connect, address }, WalletStatus);

  return (
    <>
      <button
        onClick={() => {
          console.log("button click", connected, connect);
          return (connected ? disconnect : connect)();
        }}
      >
        {connected ? "useChain Disconnect" : "useChain Connect Wallet"}
      </button>
      <div>
        osmo header chains:
        {JSON.stringify({ osmosis: { status, address, WalletStatus } })}
      </div>
    </>
  );
};
