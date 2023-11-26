import './App.css';
import Layout from './HOC/Layout';
//import DictFeature from './Features/dict/DictFeature';
import Routz from './HOC/Routz';

function App() {
  return (
      <>
        <div class= "bg-indigo-200">
          <Layout>
            <Routz />
          </Layout>
        </div>
      </>
  );
}

export default App;
