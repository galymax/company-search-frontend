import 'antd/dist/antd.css';
import { CompaniesProvider } from "../data/CompaniesContext";
import CompanySearch from "./CompanySearch";

function App() {
  return (
    <div>
      <CompaniesProvider>
        <CompanySearch />
      </CompaniesProvider>
    </div>
  );
}

export default App;
