import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./form.css";
import ModalWindow from "../ModalWindow/ModalWindow";



function FormProfile(props) {
  const form ={
    name:"",
    idnumber:"",
    birthdate:"",
    email:"",
    gender:"",
    religion:""
  }

  const [{ name, idnumber, birthdate, email, gender, religion}, setForm] = useState(form);

  const [data, setData] = useState([]) 
  const [avatar, setAvatar]= useState([]);

  const avahandle = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setAvatar(src);
    }
  };
  const handleAva = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setAvatar({
        ...avatar,
        [event.target.name]: src,
      });
    }
  };

  const changeHandler = (event) => {
    const {name, value} = (event.target);
    setForm(prevState=> ({...prevState, [name]:value}));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setData([...data, {"id":data.length +1, "name":name, "birthdate":birthdate, "idnumber":idnumber, "email":email, "gender":gender, "religion":religion, 'avatar':avatar}])
    setForm({
      name: "",
      birthdate: "",
      idnumber: "",
      email: "",
      gender: "",
      religion: "" 
    })
    setAvatar("")
  }  
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setData({
      name: [{}],
      birthdate: [{}],
      idnumber: [{}],
      email: [{}],
      gender: [{}],
      religion: [{}],
      avatar:[{}] 

    });
  };

  const resetHandler = (event) =>{
    event.preventDefault();
    setData([])
    setForm({
      name: "",
      birthdate: "",
      idnumber: "",
      email: "",
      gender: "",
      religion: ""
    })
    
  }
  
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  
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
                 <input type="text" className="form-data-input" name="name" id="name"
                  placeholder="Enter your name"
                  onChange={changeHandler} 
                  />
                 </label>  
                </div>
            </div>
        </div>

        <div className="form-field-box">
            <div className="form-group-box">
                <div className="form-group">
                    <label className="form-data-label"><b>Date of Bith</b>
                    <input type="date" className="form-data-input" name="datebirth" id="datebirth" onChange={changeHandler}/>
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
                    <div class="form-select__group">
                      <select name="religion" id="religion" class="form-select" onChange={changeHandler}>
                      <option selected="" value="Default">Choose your religion</option>
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
                    id="avatar" 
                    onChange={avahandle} onUpload={handleAva}/>
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
          <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
            <button onClick={setModalIsOpenToFalse} 
            style={{background: "#4d4d4d", border: "none", width: '20px', height:'20px', color: "#ffff", marginTop:"10px", marginLeft:"10px"}}>x</button>
             <div className="form-field-button">
          <button className="Resetbutton" type="button" onClick={resetHandler}>
            Reset
          </button>
          </div>
            <ModalWindow data={data} name={name} birthdate={birthdate} idnumber={idnumber} email={email} gender={gender} religion={religion} avatar={avatar}/>
            </Modal>
        </div>
        
    </>
  );
}

export default FormProfile;
