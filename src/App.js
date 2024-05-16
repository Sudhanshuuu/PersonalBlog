import { BrowserRouter } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App" >
    <BrowserRouter basename="/Blog">
      <Page />
    </BrowserRouter>
    </div>
  );
}

export default App;