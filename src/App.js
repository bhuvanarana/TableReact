import React,{components} from 'react'
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import './components/table.css'



function App() {


    const data = [
        {
            NAME:'RAHUL',
            AGE:26,
            ID:'143',
            PHONENO:8985265423,
            EMAIL:'Rahul@gmail.com',
            key:1
        },
        {
            NAME:'ROSHAN',
            AGE:22,
            ID:'789',
            PHONENO:9866542541,
            EMAIL:'Roshan@gmail.com',
            key:2
        },
        {
            NAME:'ASHLESHA',
            AGE:17,
            ID:'258',
            PHONENO:7145263585,
            EMAIL:'Ashlesha@gmail.com',
            key:3
        },
        {
            NAME:'RAMYA',
            AGE:22,
            ID:'369',
            PHONENO:7725456147,
            EMAIL:'ramya@gmail.com',
            key:4
        },
        {
            NAME:'ADHIYA',
            AGE:24,
            ID:'459',
            PHONENO:8956234715,
            EMAIL:'Adhiya@gmail.com',
            key:5
        },
    ];


    const columns = [
        {
          title: 'NAME',
          dataIndex: 'NAME',
          key: 'NAME',
        },
        {
          title: 'AGE',
          dataIndex: 'AGE',
          key: 'AGE',
          sorter: (a,b) =>a.AGE -b.AGE,
        },
        {
          title: 'ID',
          dataIndex:'ID',
          key: 'ID',
        },
        {
            title: 'PHONENO',
            dataIndex: 'PHONENO',
            key: 'PHONENO',
          },
          {
            title: 'EMAIL',
            dataIndex: 'EMAIL',
            key: 'EMAIL',
          },
      ];


  return (
  <div className="container"> 
  <header >
  <Table  dataSource={data}  columns={columns}>


  </Table>
  </header>
  
  </div>
 
  );
}

export default App;
