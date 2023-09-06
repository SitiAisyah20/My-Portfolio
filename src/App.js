import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Slidebar />
        <Display />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
