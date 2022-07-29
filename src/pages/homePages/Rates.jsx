import React from 'react';


const Rates = () => {
  return (
        <div className='container items-center pt-20 h-screen w-screen mx-auto'>
                <h2 className='text-[#0B2368] text-5xl font-medium pb-10 text-start'>Rates and Prices</h2>
            <div className='mb-10  h-1/2 flex justify-center mb-20'>
                <table className='table-fixed w-screen'>
                <thead className='border-b-2 text-xl'>
                    <tr className=''>
                    <th className='pb-10 pt-10 text-start font-light '>#</th>
                    <th className='pb-10 pt-10 text-start font-light '>Name</th>
                    <th className='pb-10 pt-10 text-start font-light '>Last Price</th>
                    <th  className='pb-10 pt-10 text-start font-light '>24hr Change</th>
                    <th className='pb-10 pt-10 text-start font-light '>Market cap</th>
                    </tr>
                </thead>
                <tbody className='text-xl font-light'>
                    <tr>
                    <td>1</td>
                    <td>Data set A</td>
                    <td>Data set B</td>
                    <td>Data set C</td>
                    <td>Data set D</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Data set A</td>
                    <td>Data set B</td>
                    <td>Data set C</td>
                    <td>Data set D</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Data set A</td>
                    <td>Data set B</td>
                    <td>Data set C</td>
                    <td>Data set D</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Data set A</td>
                    <td>Data set B</td>
                    <td>Data set C</td>
                    <td>Data set D</td>
                    </tr>
                </tbody>
                </table>
​            </div>
            <div className='mt-20'>
            <p className='font-normal text-[#737272] text-start text-2xl pb-10'>Start trading today and enjoy best rates</p>
            <button className='cursor-pointer rounded text-xl bg-[#0B2368] text-white  text-start  p-5'>Start trading now</button>
            </div>
        </div>
  )
}

export default Rates