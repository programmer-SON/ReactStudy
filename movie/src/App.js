import {
  BrowserRouter as Router,
  Switch, // 'Switch Not Found' 에러 발생시 [npm i react-router-dom@5.3.0] 로 설치
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


/*
 *  Router: 렌더링 역할
 *  Route: url 명시
 *  Switch: 한 번에 하나의 Route만 렌더링 하기 위해 사용
 */
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/hello">
        <h1>Hello</h1>
      </Route>
      <Route path="/movie">
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
