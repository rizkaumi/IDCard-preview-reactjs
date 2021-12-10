import React from 'react';
import Card from '../Card/Card';
import './Modal.css'



function ModalWindow(props){
    console.log(props.data)
    
    return (
    <div id="previewCard">
                
        {props.data.map(data => (
            <div className="card-data" key={data.id}>
                    <Card key={data.length} fullname={data.fullname} idnumber={data.idnumber} birthdate={data.birthdate} email={data.email} gender={data.gender} religion={data.religion} file={data.file}/>
                </div>
            ))
        }
    </div> 
                    
        
    )
}

export default ModalWindow;
