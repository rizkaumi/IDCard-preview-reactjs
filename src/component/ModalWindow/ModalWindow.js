import React from 'react';
import Card from '../Card/Card';
import './Modal.css'



function ModalWindow(props){
    console.log(props.data)
    
    return (
    <div id="previewCard">
                
        {props.data.map(data => (
            <div className="card-data" key={data.id}>
                    <Card key={data.length} name={data.name} birthdate={data.birthdate} idnumber={data.idnumber} email={data.email} gender={data.gender} religion={data.religion} avatar={data.avatar}/>
                </div>
            ))
        }
    </div> 
                    
        
    )
}

export default ModalWindow;
