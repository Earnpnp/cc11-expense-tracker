function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand text-black-50 fw-bolder" href="/">
            EXPENSE TRACKER
          </a>

          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-x-4">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa-solid fa-house fs-5" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa-solid fa-plus fs-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-4 flex-grow-1 max-w-xl">
        {/* <ul className="list-group">
          <li className="list-group-item d-flex align-items-center bd-callout bd-callout-danger">
            <div className="d-flex flex-fill" role="button">
              <div className="border border-1 border-dark rounded-2 bg-warning p-2 text-center w-15">
                <p className="p-0 m-0 text-black-50 text-3">Jan 21</p>
                <p className="p-0 m-0">21</p>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
                <div>
                  <p className="mb-1 fw-bold">7-11</p>
                  <p className="mb-0 text-black-50 text-3">Food</p>
                </div>
                <span className="badge bg-danger">฿17.00</span>
              </div>
            </div>
          </li>
          <li className="list-group-item d-flex align-items-center bd-callout bd-callout-success">
            <div className="d-flex flex-fill" role="button">
              <div className="border border-1 border-dark rounded-2 bg-warning p-2 text-center w-15">
                <p className="p-0 m-0 text-black-50 text-3">Dec 21</p>
                <p className="p-0 m-0">30</p>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
                <div>
                  <p className="mb-1 fw-bold">Monster Inc. Company</p>
                  <p className="mb-0 text-black-50 text-3">Salary</p>
                </div>
                <span className="badge bg-success">฿5,200.00</span>
              </div>
            </div>
          </li>
          <li className="list-group-item d-flex align-items-center bd-callout bd-callout-danger">
            <div className="d-flex flex-fill" role="button">
              <div className="border border-1 border-dark rounded-2 bg-warning p-2 text-center w-15">
                <p className="p-0 m-0 text-black-50 text-3">Dec 20</p>
                <p className="p-0 m-0">25</p>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
                <div>
                  <p className="mb-1 fw-bold">BTS</p>
                  <p className="mb-0 text-black-50 text-3">Transport</p>
                </div>
                <span className="badge bg-danger">฿37.00</span>
              </div>
            </div>
          </li>
        </ul> */}

        <div className="border bg-white rounded-2 p-3">
          <form className="row g-3">
            <div className="col-6">
              <input
                type="radio"
                className="btn-check"
                id="cbx-expense"
                name="type"
                defaultChecked
              />
              <label
                className="btn btn-outline-danger rounded-0 rounded-start"
                htmlFor="cbx-expense"
              >
                Expense
              </label>
              <input
                type="radio"
                className="btn-check"
                id="cbx-income"
                name="type"
              />
              <label
                className="btn btn-outline-success rounded-0 rounded-end"
                htmlFor="cbx-income"
              >
                Income
              </label>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-start">
              <i className="fa-solid fa-xmark" role="button" />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Payee</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option>Food</option>
                <option>Shopping</option>
                <option>Transport</option>
                <option>Utilities</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label className="form-label">Amount</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-12">
              <div className="d-grid mt-3">
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-grid mt-4">
          <button className="btn btn-danger">Delete Transaction</button>
        </div>
      </div>
    </div>
  );
}

export default App;
