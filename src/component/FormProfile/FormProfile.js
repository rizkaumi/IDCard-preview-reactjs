import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./form.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import image from '.././image/profil.png'



function FormProfile() {
  const form ={
    fullname:"",
    idnumber:"",
    birthdate:"",
    email:"",
    gender:"",
    religion:""
  }

  const [file, setFile]= useState(image);

  const [{ fullname, idnumber, birthdate, email, gender, religion}, setForm] = useState(form);

  const [data, setData] = useState([]) 
  
  const changeHandler = (event) => {
    const {name, value} = (event.target);
    setForm(prevState=> ({...prevState, [name]:value}));
  };

  const avatarchangeHandler = (event) => {
    let src = setFile(URL.createObjectURL(event.target.files[0]))
    setForm(prevState => ({ ...prevState, name: src }));
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setData([...data, {"id":data.length+1, "fullname":fullname, "idnumber":idnumber, "birthdate":birthdate, "email":email, "gender":gender, "religion":religion, 'file':file}])
    setForm({
      fullname: "",
      birthdate: "",
      idnumber: "",
      email: "",
      gender: "",
      religion: "" 
    })
    setFile(image);
  }  
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setData({
      fullname: [{}],
      idnumber: [{}],
      birthdate: [{}],
      email: [{}],
      gender: [{}],
      religion: [{}],
      file:[{}]
    });
  };

  const resetHandler = (event) =>{
    event.preventDefault();
    setData([])
    setForm({
      fullname: "",
      idnumber: "",
      birthdate: "",
      email: "",
      gender: "",
      religion: ""
    })
    setFile(image);
  }
  
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  const modalstyle={
    content:{
    position: 'absolute',
    width: '55%',
    inset: '40px',
    background: '#F0AA89',
    overflow: 'auto',
    outline: 'none',
    padding: '10px',
    marginLeft: '20%'
    }
  };

  return (
    <>
    <div className="form-wrapper">
      <form className="form-field" action="#" onSubmit={submitHandler}>
        <div className="form-heading__box">
          <h1 className="form-heading__text">ID Card Form</h1>
          <p> please fill in this form to create your ID card</p><hr />
        </div>
        <div className="form-field-box">
            <div className="form-group-box">
                 <div className="form-group">
                 <label className="form-data-label"><b>Name</b>
                 <input type="text" className="form-data-input" name="fullname" id="fullname"
                  placeholder="Enter your fullname"
                  onChange={changeHandler} 
                  />
                 </label>  
                </div>
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                    <label className="form-data-label"><b>Date of Birth</b>
                    <input type="date" className="form-data-input" name="birthdate" id="birthdate" onChange={changeHandler}/>
                    </label> 
                </div>
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                 <label className="form-data-label"><b>ID Number</b>
                 <input className="form-data-input" name="idnumber" id="idnumber"
                  placeholder="Enter your ID number" 
                  onChange={changeHandler} />
                 </label>
                </div>
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                    <label className="form-data-label"><b>Gender</b></label>
                        <div className="form-group-radio">
                          <label>
                            <input type="radio" name="gender" id="gender" value="Male" className="form-radio-button" onChange={changeHandler}/>
                            <span className="form-data-label__radio">Male</span>
                          </label>
                        </div>
                        <div className="form-group-radio">
                          <label>
                            <input type="radio" name="gender" id="gender" value="Female" className="form-radio-button" onChange={changeHandler}/>
                            <span className="form-data-label__radio">Female</span>
                          </label>
                        </div>
                </div>
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                    <label className="form-data-label"><b>Religion</b></label>
                    <div className="form-select__group">
                      <select name="religion" id="religion" className="form-select" onChange={changeHandler}>
                      <option value="Default">Choose your religion</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Buddha">Buddha</option>
                      </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                    <label className="form-data-label"><b>Email</b>
                    <input type="email" className="form-data-input" name="email" id="email"
                    placeholder="Enter your email"
                    onChange={changeHandler}/>
                    </label> 
                </div>  
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                    <label className="form-data-label"><b>Upload your photo</b></label>
                    <input type="file" className="form-data-input picture-form" name="avatar" 
                    id="avatar" alt='foto'
                    onChange={avatarchangeHandler}/>
                </div>
            </div>
        </div>
        
      </form>
    </div>
    <div className="form-field-button">
          <button className="Submitbutton" type="submit" onClick={submitHandler}>  
           Submit
          </button>
          <button className="Submitbutton" type="clear" onClick={handleReset}>Clear Form</button>
          <button className="Previewbutton" id="button" type="button" onClick={setModalIsOpenToTrue}>
            Preview
          </button>
          <Modal isOpen={modalIsOpen} style={modalstyle} onRequestClose={()=> setModalIsOpen(false)}>
            <button onClick={setModalIsOpenToFalse} 
            style={{background: "#4d4d4d", border: "none", width: '20px', height:'20px', color: "#ffff", marginTop:"10px", marginLeft:"10px"}}>x</button>
            <div className="form-field-button">
              <button className="Resetbutton" type="button" onClick={resetHandler}>
               Reset
              </button>
           </div>
            <ModalWindow data={data} fullname={fullname} idnumber={idnumber} birthdate={birthdate} email={email} gender={gender} religion={religion} file={file}/>
            </Modal>
        </div>
        
    </>
  );
}

export default FormProfile;
