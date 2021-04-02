// import "./App.css";
import HeadeSection from "./LayOut/HeadeSection";
import FooterSection from "./LayOut/FooterSection";
import { Layout } from "antd";
import ContainerSection from "./LayOut/ContainerSection";
import LeftMenu from "./LayOut/LeftMenu";

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <LeftMenu/>
      <Layout>
        <HeadeSection />
        <ContainerSection />
        <FooterSection />
      </Layout>
    </Layout>
  );
}

export default App;
