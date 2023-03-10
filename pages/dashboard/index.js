import { useState } from "react";

import { authPage } from "@/middlewares/authorizationPage";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import CreateOrderModal from "@/components/CreateOrderModal";
import UpdateOrderModal from "@/components/UpdateOrderModal";
import OrderModal from "@/components/OrderModal";

export async function getServerSideProps(ctx) {
  
  const { token } = await authPage(ctx);

  const orderReq = await fetch('http://localhost:3000/api/order', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .catch((error) => {
    console.log(error)
  });
  
  const orders = await orderReq.json();
  
  return {
    props: {
      token,
      orders: orders.data
    }
  }
}

export default function DashboardIndex(props) {

  const { token } = props;

  const [createModal, setVisibleCreate] = useState(false);
  const [updateModal, setVisibleUpdate] = useState(false);
  const [orderModal, setVisibleOrder] = useState(false);
  const [orderData, setOrderData] = useState();
  
  // async function deleteHandler(id, e) {
  //   e.stopPropagation();
  //   e.preventDefault();
    
  //   const { token } = props;
    
  //   const ask = confirm('Apakah data ini akan dihapus?');
    
  //   if(ask) {
  //     const deleteOrder = await fetch('/api/order/delete/' + id, {
  //       method: 'DELETE',
  //       headers: {
  //         'Authorization': 'Bearer ' + token
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
      
  //     const res = await deleteOrder.json();
      
  //     Router.replace('/dashboard');
  //   }
  // }
  
  async function updateHandler(orders, e) {
    e.stopPropagation();
    e.preventDefault();
    setVisibleUpdate(true);
    setOrderData(orders);
  }
  
  return (

  <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      
    <Nav />
    
    <Sidebar />

    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <div onClick={() => setVisibleCreate(true)} className="cursor-pointer bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-7 h-7 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <div className="text-right">
            <p>Order Baru</p>
          </div>
        </div>
      </div>

      <div className="mt-4 mx-4">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">

          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="w-1/8 truncate ... px-4 py-3">ID Order</th>
                  <th className="w-1/8 truncate ... px-4 py-3">ID Customer</th>
                  <th className="w-1/8 truncate ... px-4 py-3">Nama Customer</th>
                  <th className="w-1/8 truncate ... px-4 py-3">Jumlah SS</th>
                  <th className="w-1/8 truncate ... px-4 py-3">Tanggal Order</th>
                  <th className="w-1/8 truncate ... px-4 py-3">Total Biaya</th>
                  <th className="w-1/8 truncate ... px-4 py-3">Status</th>
                  <th className="w-1/8 truncate ... px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                { props.orders?.map(orders => (
                    <tr key={ orders.orderId } className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                      <td className="w-1/8 truncate ... px-4 py-3 text-sm">{ orders.orderId }</td>
                      <td className="w-1/8 truncate ... px-4 py-3 text-sm">{ orders.customerId }</td>
                      <td className="w-1/8 truncate ... px-4 py-3 text-sm">{ orders.customerName }</td>
                      <td className="w-1/8 truncate ... px-4 py-3 text-sm">{ orders.jumlahSS }</td>
                      <td className="w-1/8 truncate ... px-4 py-3 text-sm">{ orders.orderCreatedAt.substring(0, 10) }</td>
                      <td className="w-1/8 truncate ... px-4 py-3 text-sm">{ orders.total }</td>
                      <td className="w-1/8 truncate ... px-4 py-3 text-xs">
                        {
                        orders.printCount == 0 ?
                        <span className="px-2 py-1 font-semibold leading-tight text-amber-700 bg-amber-100 rounded-full dark:bg-amber-700 dark:text-amber-100">Belum Dicetak</span>
                        :
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Sudah Dicetak</span>
                        }
                      </td>
                      <td className="w-1/8 px-4 py-3 text-sm flex">
                        <button onClick={updateHandler.bind(this, orders)} type="button" className="mr-4 px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-blue-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                        </button>
                        <button onClick={() => {setVisibleOrder(true); setOrderData(orders)}} type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-blue-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        </button>
                        {/* <button onClick={deleteHandler.bind(this, orders.orderId)} type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-red-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button> */}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span className="flex items-center col-span-3"></span>
            <span className="col-span-2"></span>
            {/* <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                      <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                  </li>
                  <li>
                    <span className="px-3 py-1">...</span>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                      <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span> */}
          </div>

        </div>
      </div>
      
    </div>

    <CreateOrderModal isVisible={createModal} onClose={() => setVisibleCreate(false)} />

    <UpdateOrderModal isVisible={updateModal} onClose={() => setVisibleUpdate(false)} orderData={orderData} />

    <OrderModal isVisible={orderModal} onClose={() => setVisibleOrder(false)} orderData={orderData} token={token} />

  </div>

  );

}