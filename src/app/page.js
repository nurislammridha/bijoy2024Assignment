'use client'
import { infos } from "@/assets/functions/functions";
import { useEffect, useState } from "react";

// import Login from './login/pages';
export default function Pages() {
  const [data, setData] = useState({ loading: true, list: [] })
  useEffect(() => {
    infos().then((res) => setData(res))
  }, [])
  console.log('data', data)
  return (

    <>
      <div className='table_container'>
        <p className='fs20 fm tac'>List of our heroes 2024 movement </p>
        <div className='mt24'>
          {data?.loading ? <p className="tac"><i class="fa fa-spinner fa-spin" style={{ fontSize: "50px" }}></i></p>
            :
            (<>
              {data?.list.length > 0 ?
                <table>
                  <tbody>
                    <tr>
                      <th>SL</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>City</th>
                    </tr>
                    {data.list.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.phone}</td>
                        <td>{item?.address?.city}</td>
                      </tr>
                    ))}


                  </tbody>
                </table>
                : <h2>No data found</h2>}
            </>)}
        </div>
      </div >
    </>
  );
}
