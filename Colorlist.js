// import { Table } from 'antd';
import React, {useEffect, useState} from 'react';

const Colorlist = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://hub.dummyapis.com/employee?noofRecords=15").then((result)=>{
      result.json().then((response)=>{
        setData(response);
      })
    })
  }, [])
  console.log(data);
  return (
    <div>
      <h3 className="mb-4 title">Colors</h3>
      {/* <Table dataSource={data} /> */}
      <table className='table table-bordered' border={2}>
      <thead>
        <tr>
          <td>id</td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Email</td>
          <td>Dob</td>
          <td>Age</td>
          <td>Salary</td>
        </tr>
        </thead>
        {
          data.map((item)=>
            <tr>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.dob}</td>
          <td>{item.age}</td>
          <td>{item.salary}</td>
            </tr>
          )
        }
      </table>
      <div>
      </div>
    </div>
  )
}

export default Colorlist;
































// import React from 'react';
// import { Table } from 'antd';
// const columns = [
//   {
//     title: 'SNo',
//     dataIndex: 'key',
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Product',
//     dataIndex: 'product',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//   },
// ];
// const data1 = [];
// for (let i = 0; i < 46; i++) {
//   data1.push({
//     key: i,
//     name: `Edward King ${i}`,
//     product: 32,
//     status: `London, Park Lane no. ${i}`,
//   });
// }

// const Colorlist = () => {
//   return (
//     <div>
//       <h3 className="mb-4 title">Colors</h3>
//       <div>
//       <Table columns={columns} dataSource={data1} />
//       </div>
//     </div>
//   )
// }

// export default Colorlist;



/*  https://red-comet-831013.postman.co/workspace/New-Team-Workspace~ef7efb56-ef09-4ce0-8159-6179cd9dad6b/collection/25090149-5bd0541f-c743-4c0c-a562-d219bf8c2b54?action=share&creator=25090149   */
