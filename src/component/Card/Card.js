import React from "react";
import "./card.css";

function Card(props) {
  

  return (
      <div className="card">
        <div className="card__left">
          <div className="card__left-img-box">
          <img src={props.file} className="card__left-img" alt='foto'/>
          </div>
        </div>

        <div className="card__right">
          <div className="card__right-id-box">
            <h1 className="card__right-id">
              <span className="card__right-id-name" id="previewName">{props.fullname}</span>
            </h1>
          </div>

          <div className="card__right-id-box">
              <p className="card__right-id" id="previewNumber">{props.idnumber}</p><hr />
          </div>

          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                 <p className="card__right-detail-label">Date of Birth</p>
                 <p className="card__right-detail-data" id="previewBirthdate">{props.birthdate}</p>
              </div>
            </div>
          </div> 
          <div class="card__right-detail-box">
            <div class="card__right-detail">
              <div class="card__right-detail-group">
                <p class="card__right-detail-label">Gender</p>
                <p class="card__right-detail-data" id="previewGender">{props.gender}</p>
              </div>
            </div>
          </div>
          
          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Email</p>
                <p className="card__right-detail-data" id="previewEmail">
                  {props.email}
                </p>
            </div>
          </div>

          <div className="card__right-detail-box">
             <div className="card__right-detail-group">
                 <p className="card__right-detail-label">Religion</p>
                 <p className="card__right-detail-data" id="previewReligion">{props.religion}</p>
              </div>
          </div>
        </div> 
       </div>     
      </div>
  );
}

export default Card;
