import React, { useEffect} from "react";
// import { useFetch } from '../../../useFetch'
// import { axios } from '../../components/baseUrl'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import {datatabless} from '../../website-settings/commodityInsight/DummyData';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

const Orders = () => {


  // const [search, setSearch] = useState();

  useEffect(()=>{
    //initialize datatable
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
},[])

  //  const {data, loading, error} = useFetch("/order")

  //  if (loading) return <h1>LOADING ....</h1>

  //  if (error) console.log(error)

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        <Navbar />
        <Sidebar />
        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            {/* <!-- pageheader --> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="page-header" style={{ textAlign: "left" }}>
                  <h2 className="pageheader-title">Order Overview</h2>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                align="right"
              >
                <a href="/corders" className="btn btn-dark">
                  Create Order
                </a>
              </div>
            </div>
            {/* <!-- end pageheader --> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- widgets   --> */}
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Total Orders</h5>
                          <h2 className="mb-0"> 10,28,056</h2>
                        </div>
                        <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mb-2" style={{textAlign:'center'}}>
                          <i
                            className="fa fa-eye fa-fw fa-sm text-info justify-content-center mt-2"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Total Transactions</h5>
                          <h2 className="mb-0"> $149.00</h2>
                        </div>
                        <div
                          className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mb-2" style={{textAlign:'center'}}
                        >
                          <i
                            className="fa fa-money-bill-alt fa-fw fa-sm text-brand mt-2"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Total Buyers</h5>
                          <h2 className="mb-0"> 24,763</h2>
                        </div>
                        <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mb-2" style={{textAlign:'center'}}>
                          <i className="fa fa-user fa-fw fa-sm text-primary mt-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Partnerships</h5>
                          <h2 className="mb-0">14</h2>
                        </div>
                        <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mb-2" style={{textAlign:'center'}}>
                          <i className="fa fa-handshake fa-fw fa-sm text-secondary mt-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-header" style={{ textAlign: "left" }}>
                    <h4 className="mb-0 font-bold">All Orders</h4>

                    {/* <p>This example shows DataTables and the Buttons extension being used with the Bootstrap 4 framework providing the styling.</p> */}
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="example wrapper"
                        className="dataTables_wrapper dt_bootstrap4"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 md-6"
                            style={{ textAlign: "left" }}
                          >
                            <div className="dt-buttons">
                              <button
                                className="btn btn-outline-light buttons-copy buttons-html5"
                                tabindex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Copy</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-excel buttons-html5"
                                tabindex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Excel</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-pdf buttons-html5"
                                tabindex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>PDF</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-print"
                                tabindex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Print</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-collection dropdown-toggle buttons-colvis"
                                tabindex="0"
                                aria-controls="example"
                                type="button"
                                aria-haspopup="true"
                              >
                                <span>Column Visibility</span>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>

                      
                      <div className="container">
                        <table
                         id="example"
                          className="table table-hover table-bordered"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          <thead>
                            <tr>
                                <th>ID</th>
                              <th>Commodity Name</th>
                              <th>Country</th>
                              <th>Price</th>
                              <th>Origin</th>
                              <th>Specification</th>
                              <th>Description</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                         { datatabless.map((item) => {
                         return (
                      
                              <tr>
                                  <td>{item.id}</td>
                                  <td>{item.commodityname}</td>
                                  <td>{item.country}</td>
                                  <td>{item.price}</td>
                                  <td>{item.origin}</td>
                                  <td>{item.specification}</td>
                                  <td>{item.description}</td>
                                  <td>{item.status}</td>
                                
                              </tr>
                        
                          )
                        })}
                           
                           </tbody>
                        </table>
                        </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- footer --> */}
          <div className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  Copyright © 2018 Concept. All rights reserved. Dashboard by{" "}
                  <a href="https://colorlib.com/wp/">Colorlib</a>.
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="text-md-right footer-links d-none d-sm-block">
                    <a href="jav">About</a>
                    <a href="jav">Support</a>
                    <a href="jav">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end footer --> */}
        </div>
        {/* <!-- end main wrapper --> */}
      </div>
      {/* <!-- end main wrapper -->


    <!-- Optional JavaScript -->
    <!-- jquery 3.3.1 -->
    <script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <!-- bootstap bundle js -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <!-- slimscroll js -->
    <script src="assets/vendor/slimscroll/jquery.slimscroll.js"></script>
    <script src="../assets/vendor/multi-select/js/jquery.multi-select.js"></script>
    <!-- main js -->
    <script src="assets/libs/js/main-js.js"></script>
    <!-- chart chartist js -->
    <script src="assets/vendor/charts/chartist-bundle/chartist.min.js"></script>
    <!-- sparkline js -->
    <script src="assets/vendor/charts/sparkline/jquery.sparkline.js"></script>
    <!-- morris js -->
    <script src="assets/vendor/charts/morris-bundle/raphael.min.js"></script>
    <script src="assets/vendor/charts/morris-bundle/morris.js"></script>
    <!-- chart c3 js -->
    <script src="assets/vendor/charts/c3charts/c3.min.js"></script>
    <script src="assets/vendor/charts/c3charts/d3-5.4.0.min.js"></script>
    <script src="assets/vendor/charts/c3charts/C3chartjs.js"></script>
    <script src="assets/libs/js/dashboard-ecommerce.js"></script>
    <!-- Data tables -->
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="assets/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script src="assets/vendor/datatables/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/vendor/datatables/js/data-table.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
    <script src="https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js"></script>
    <!-- Form validation -->
    <script src="../assets/vendor/parsley/parsley.js"></script>
    <script>
    $('#form').parsley();
    </script>
     */}
    </>
  );
};

export default Orders;