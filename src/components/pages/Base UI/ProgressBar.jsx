import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";

const Progressbar = () => {
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />
        
        {/* Page Wrapper */}

        <div class="page-wrapper">
          <div class="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Progress Bar</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Progress */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Progress</h3>
                <div className="line" />
              </div>
              <div className="progress-example card bg-white">
                <div className="card-header">
                  <h5 className="card-title">Large Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card bg-white">
                <div className="card-header">
                  <h5 className="card-title">Default Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card bg-white">
                <div className="card-header">
                  <h5 className="card-title">Medium Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card bg-white">
                <div className="card-header">
                  <h5 className="card-title">Small Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card bg-white">
                <div className="card-header">
                  <h5 className="card-title">Extra Small Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar w-75"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Progress */}
          </div>
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Progressbar;
