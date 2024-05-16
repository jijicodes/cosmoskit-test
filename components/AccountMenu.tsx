import { useChains } from "@cosmos-kit/react";
import { WalletStatus } from "@cosmos-kit/core";
import { ENDPOINTS } from "@/pages/_app";

export const AccountMenu = (): JSX.Element => {
  const chains = useChains(Object.keys(ENDPOINTS));

  const { status, address, disconnect, connect } = chains.osmosis;

  console.log("account menu", { status, connect, address }, WalletStatus);

  const connected = Object.values(chains).every(
    ({ isWalletConnected }) => isWalletConnected,
  );

  return (
    <>
      <button
        onClick={() => {
          console.log("button click", connected, connect);
          return (connected ? disconnect : connect)();
        }}
      >
        {connected ? "useChains Disconnect" : "useChains Connect Wallet"}
      </button>
      <div>
        header chains:
        {JSON.stringify({
          osmosis: { status, address, WalletStatus },
          chihuahua: {
            status: chains.chihuahua.status,
            address: chains.chihuahua.address,
            WalletStatus: chains.chihuahua.status,
          },
        })}
      </div>
    </>
  );
};
