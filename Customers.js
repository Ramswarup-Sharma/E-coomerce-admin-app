import React, {useEffect, useState} from 'react';

const Customers = () => {
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
      <h3 className="mb-4 title">Customers</h3>
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

export default Customers;


