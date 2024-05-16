import { useChainWallet } from "@cosmos-kit/react";
import { WalletStatus } from "@cosmos-kit/core";

export const UseChainContextAccountMenu = (): JSX.Element => {
  const {
    status,
    address,
    disconnect,
    connect,
    isWalletConnected: connected,
  } = useChainWallet("osmosis", "keplr-extension");

  console.log("useChainWallet", { status, connect, address }, WalletStatus);

  return (
    <>
      <button
        onClick={() => {
          console.log("button click", connected, connect);
          return (connected ? disconnect : connect)();
        }}
      >
        {connected
          ? "useChainWallet Disconnect"
          : "useChainWallet Connect Wallet"}
      </button>
      <div>
        osmo header chains:
        {JSON.stringify({ osmosis: { status, address, WalletStatus } })}
      </div>
    </>
  );
};
