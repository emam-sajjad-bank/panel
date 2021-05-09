import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Style from './style';

import { ReactComponent as PDFIcon } from '../../../assets/svg/pdf.svg';
import { ReactComponent as ZIPIcon } from '../../../assets/svg/zip.svg';
import { ReactComponent as DOCXIcon } from '../../../assets/svg/docx.svg';


const SingleUpload = ({accept , children , onChange , value} , props) =>{
  const [FileData, setFileData] = useState(null);
  const [image , setImage] =useState(null);


  useEffect(() => {
    if(value === ""){
      setImage(null);
      setFileData(null);
    }

  }, [value]);

  const handleChange = e =>{
    if(onChange) {
      onChange(e);
    }

    if(e.target.files[0]){
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFileData(e.target.files[0]);
      setImage(e.target.res);
    }else{
      setFileData(null);
      setImage(null);
    }
  };

  return(
    <Style>
      <label className="upload"> 
        <input 
          {...props}
          value={value ? value : ""}
          onChange={e=>handleChange(e)}
          type="file" 
          accept={accept}
        />
        {FileData !== null ? (
          <>
            {(FileData.type.split("/")[0] === "image") ?
              <img src={image} alt=""   /> :(
                <div className="svg-box">
                  
                  {FileData.type.split("/")[1] === "pdf" ? <PDFIcon /> :
                    FileData.type.split("/")[1] === "msword" ? <DOCXIcon />:
                      FileData.type.split("/")[1] === "zip" ? <ZIPIcon /> :
                        ""}
                </div> 
              )
            }
            <div className="file-data">
              <p>
                نام فایل : {FileData.name.split(".")[0]}
              </p>
              <p>
                سایز فایل : {FileData.size / 1000 + "KB"}
              </p>
            </div>
            
          </>
        ) : 
          children}
      </label>
    </Style>
  );
};
 
SingleUpload.propTypes = {
  accept: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any,
};
 
export default SingleUpload;