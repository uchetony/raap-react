import React from 'react'
import './Upload.scss'

const Upload = (props) => {

    const { altPicText, instruction, children: childComponents } = props;
    return (
        <div className="upload">
           { altPicText && <span className="upload__alt-pic-text"> {altPicText} </span>  }
           { instruction && (
               <React.Fragment>
                   <p className="upload__title"> Upload Instructions </p>
                   <small className="upload__instruction"> {instruction} </small>
               </React.Fragment>
            )}

           {childComponents}
        </div>
    )
}

export default Upload
