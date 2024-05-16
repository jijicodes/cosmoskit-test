import { AccountMenu, Layout, UseChainAccountMenu } from "@/components";
import { Body } from "@/components/Body/Body";
import { OsmoBody } from "@/components/Body/OsmoBody";
import { UseChainContextAccountMenu } from "@/components/UseChainContextAccountMenu";

export default function Home() {
  return (
    <Layout>
      <AccountMenu />
      <hr />
      <UseChainAccountMenu />
      <hr />
      <UseChainContextAccountMenu />
      <hr />
      <Body />
      <hr />
      <OsmoBody />
    </Layout>
  );
}
