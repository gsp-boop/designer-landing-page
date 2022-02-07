import React from "react";
import { work } from "../js/work";
import "../styles/work.css"
import ModalComp from "./ModalComp";

class Work extends React.Component {

    render(){
        return (

            <div className="work-section" id="work-section">
                <h2 className="work-header">Work</h2>
                {
                    work.map((item, i) => (
                      <ModalComp block={item} index={i} />
                    ))
                }

            </div>
          );
    }
    
}

export default Work;
