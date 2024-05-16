import { useChain } from "@cosmos-kit/react";

export const Body = () => {
  const { address, isWalletConnected } = useChain("chihuahua");

  return (
    <div>
      Chihuahua Body component <div>Chihuahua addr: {address || "-"}</div>
      <div>Chihuahua connected: {isWalletConnected ? "true" : "false"}</div>
    </div>
  );
};
