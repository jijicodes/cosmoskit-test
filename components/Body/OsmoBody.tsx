import { useChain } from "@cosmos-kit/react";

export const OsmoBody = () => {
  const { address, isWalletConnected } = useChain("osmosis");

  return (
    <div>
      Osmosis Body component <div>Osmosis addr: {address || "-"}</div>
      <div>Osmosis connected: {isWalletConnected ? "true" : "false"}</div>
    </div>
  );
};
