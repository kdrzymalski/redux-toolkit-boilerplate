import React from 'react';
import logo from './logo.svg';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import {MailOutlined} from '@ant-design/icons';
import {Counter} from './features/counter/Counter';
import './App.css';
import AgePredictions from "./features/age/Age";
import {Link, Route, Routes} from "react-router-dom";
import {CounterSaga} from "./features/counter/Saga/CounterSaga";

function App() {
  return (
    <div className="App">
          <nav>
              <Menu onClick={() => console.log("click")} mode="horizontal">
                  <Menu.Item key="counter" icon={<MailOutlined />}>
                      <Link to="/counter">Counter</Link>
                  </Menu.Item>
                  <Menu.Item key="age" icon={<MailOutlined />}>
                      <Link to="/age">Age</Link>
                  </Menu.Item>
                  <Menu.Item key="counterSaga" icon={<MailOutlined />}>
                      <Link to="/counterSaga">CounterSaga</Link>
                  </Menu.Item>
              </Menu>
          </nav>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counterSaga" element={<CounterSaga />} />
            <Route path="/age" element={<AgePredictions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
