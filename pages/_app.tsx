import "../styles/globals.css";
import "@interchain-ui/react/styles";
import type { AppProps } from "next/app";
import { ChainProvider } from "@cosmos-kit/react";
import { wallets as keplr } from "@cosmos-kit/keplr-extension";
import { assets, chains } from "chain-registry";
import { ThemeProvider, useTheme } from "@interchain-ui/react";

export const ENDPOINTS: Record<
  string,
  {
    rpc: string[];
    rest: string[];
    chainColor: string;
    explorerUrl: string;
    contractAddress: string;
  }
> = {
  chihuahua: {
    rpc: ["https://chihuahua-rpc.polkachu.com"],
    rest: ["https://chihuahua-api.polkachu.com"],
    contractAddress:
      "chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0",
    chainColor: "#F0A841",
    explorerUrl: "https://ping.pub/chihuahua",
  },
  osmosis: {
    rpc: ["https://osmosis-rpc.polkachu.com"],
    rest: ["https://osmosis-api.polkachu.com"],
    contractAddress:
      "osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07",
    explorerUrl: "https://ping.pub/osmosis",
    chainColor: "#b100cd",
  },
};

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  return (
    <ThemeProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        disableIframe
        wallets={[...keplr]}
        walletModal={() => <></>}
        endpointOptions={{
          isLazy: true,
          endpoints: ENDPOINTS,
        }}
      >
        <Component {...pageProps} />
      </ChainProvider>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
