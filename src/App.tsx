import {BoardListContainer} from "./comp/BoardListContainer";
import {HeaderMenu} from "./comp/HeaderMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BoardFormContainer} from "./comp/BoardFormContainer";

function App() {

  return (
    <div className="App">
        <HeaderMenu />
        <div style={{ marginTop: '10vh'}}>
            <Routes>
                <Route path="/board/:boardType" element={<BoardListContainer />} />
                <Route path="/board/form" element={<BoardFormContainer />} />
            </Routes>
        </div>
    </div>
  )
}

export default App
