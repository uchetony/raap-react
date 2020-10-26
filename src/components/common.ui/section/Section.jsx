import React from 'react'
import './Section.scss'

const Section = (props) => {
    return (
       <div className="section">
           {props.sectionHeader && (
                <h3 className="section__header section__header_size_md"> 
                    {props.sectionHeader} 
                    <hr className="section__header-decoration" />
                </h3>
           )}
            <div className="section__element-holder">
                {props.children}
            </div>
       </div>
    )
}

export default Section
