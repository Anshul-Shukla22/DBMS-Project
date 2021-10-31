import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const DisplayStudent = ({ user, setEdit }) => {
  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
    //eslint-disable-next-line
  }, []);

  const {
    stud_name,
    user_email,
    stud_phone,
    stud_gender,
    stud_dept,
    stud_branch,
    roll_no,
    cpi,
    response,
  } = user;

  let CPI = cpi;
  if (!cpi) {
    CPI = "Not Found";
  }

  const onEdit = () => {
    setEdit(true);
  };

  return (
    <div
      className='container rounded bg-white mt-3 mb-5'
      style={{ width: "100%" }}
    >
      <div className='row'>
        <div className='col-md-3 border-right'>
          <div className='d-flex flex-column align-items-center text-center p-3 py-5'>
            <img
              className='rounded-circle mt-0'
              width='150px'
              alt='Profile'
              src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            />
            <span className='font-weight-bold'>{stud_name}</span>
            <span className='text-black-50'>{user_email}</span>
            <span className='text-black-50'>CPI: {CPI}</span>
            <span> </span>
          </div>
        </div>

        <div className='col-md-5'>
          <div
            className='row'
            style={{ width: "300px", margin: "auto", marginTop: "4.5em" }}
          >
            <div className='input-field col s12'>
              <input
                id='username'
                name='username'
                type='text'
                className='validate'
                value={stud_name}
                disabled
                readOnly
              />
              <label htmlFor='username'>Name</label>
            </div>
          </div>

          <div className='row' style={{ width: "300px", margin: "auto" }}>
            <div className='input-field col s12'>
              <input
                id='email'
                name='email'
                type='text'
                className='validate'
                value={user_email}
                readOnly
                disabled
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>

          <div className='row' style={{ width: "300px", margin: "auto" }}>
            <div className='input-field col s12'>
              <select name='gender' value={stud_gender} disabled readOnly>
                <option value='' defaultValue disabled>
                  Choose your option
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
              <label>Gender</label>
            </div>
          </div>

          <div className='row' style={{ width: "300px", margin: "auto" }}>
            <div className='input-field col s12'>
              <input
                id='rollno'
                name='rollno'
                type='text'
                className='validate'
                value={roll_no}
                disabled
                readOnly
              />
              <label htmlFor='rollno'>Roll Number</label>
            </div>
          </div>

          <div className='row' style={{ width: "300px", margin: "auto" }}>
            <div className='input-field col s12'>
              <input
                id='phone'
                name='phone'
                type='text'
                className='validate'
                value={stud_phone}
                disabled
                readOnly
              />
              <label htmlFor='phone' className='active'>
                Mobile Number
              </label>
            </div>
          </div>

          <div className='row' style={{ width: "300px", margin: "auto" }}>
            <div className='input-field col s12'>
              <select name='dept' value={stud_dept} disabled readOnly>
                <option value=''>Choose your option</option>
                <option value='B.Tech'>B.Tech</option>
                <option value='M.Tech'>M.Tech</option>
                <option value='B.Des'>B.Des</option>
                <option value='M.Des'>M.Des</option>
                <option value='P.hd'>P.hd</option>
              </select>
              <label>Programme</label>
            </div>
          </div>

          <div className='row' style={{ width: "300px", margin: "auto" }}>
            <div className='input-field col s12'>
              <select name='branch' value={stud_branch} disabled readOnly>
                <option value='' disabled>
                  Choose your option
                </option>
                <option value='CSE'>
                  Computer Science and Engineering&#40;CSE&#41;
                </option>
                <option value='ECE'>
                  Electronics and Communication Engineering&#40;ECE&#41;
                </option>
                <option value='Des'>Design&#40;Des&#41;</option>
                <option value='ME'>Mechanical Engineering&#40;ME&#41;</option>
                <option value='NS'>Natural Sciences&#40;NS&#41;</option>
              </select>
              <label>Branch</label>
            </div>
          </div>

          <div className='row'>
            <button
              className='btn waves-effect waves-light'
              value='Edit'
              onClick={onEdit}
              style={{ marginTop: "2em", borderRadius: "2em", width: "13em" }}
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div class='col-md-4'>
          <div class='p-3 py-5'>
            <div
              class='d-flex justify-content-between align-items-center experience'
              style={{ flexDirection: "column" }}
            >
              <h5>Response from last quiz</h5>
              <br />
              <p>{response}</p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayStudent;
