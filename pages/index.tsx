import type { NextPage } from "next";
import Item from "../components/item";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 py-4">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title={`또 '끼임 사고' 사망‥알릴 수도·멈출 수도 없었다 (2022.04.18/뉴스데스크/MBC)`}
            nickName={`MBCNEWS`}
            views={299292 / 10000}
            updatedAt={12}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
