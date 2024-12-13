import './App.css';
import {dictionary} from "./utilities/constants";
import Navbar from "./components/ui/app-header";
import AutocorrectTextArea from './components/autocorrect-textarea/app-autocorrect-text-area';

function App() {
  return (
      <div className={"flex flex-col"}>
          <Navbar/>
          <AutocorrectTextArea dictionary={dictionary}/>
      </div>
  );
}

export default App;
