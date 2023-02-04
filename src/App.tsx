import {BoardListContainer} from "./comp/BoardListContainer";
import {HeaderMenu} from "./comp/HeaderMenu";
import { Route, Routes} from "react-router-dom";
import {BoardFormContainer} from "./comp/BoardFormContainer";
import {userIdName} from "./comp/api/types";
import {BoardDetailContainer} from "./comp/BoardDetailContainer";

function App() {

    return (
        <div className="App">
            <HeaderMenu/>
            <div style={{marginTop: '10vh'}}>
                <Routes>
                    <Route path="/board/:boardType" element={<BoardListContainer/>}/>
                    <Route path="/board/detail/:boardType/:boardId" element={<BoardDetailContainer user={userIdName()}/>} />
                    <Route path="/board/form/:boardType" element={<BoardDetailContainer user={userIdName()}/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default App
