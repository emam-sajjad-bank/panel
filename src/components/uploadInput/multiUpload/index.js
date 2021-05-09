import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Style from './style';




const MultiUpload = ({accept , children , onChange , resetFlag} , props) =>{
  const [FilesData, setFilesData] = useState([]);
  const [image , setImage] =useState([]);
  const [value , setValue] = useState(""); 

  useEffect(() => {
    if(onChange) {
      onChange(FilesData); 
    }
  }, [FilesData]);

  useEffect(() => {
    setFilesData([]);
    setValue("");
    setImage([]); 
  }, [resetFlag]);

  const handleChange = e =>{
    setValue(e.target.value);
    if(e.target.files){
      setFilesData([...FilesData , e.target.files[0]]);
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = event => {
        setImage([...image , event.target.result ]);
      };
    }
    setValue("");
    setImage([]);
  };
  return(
    <Style>
      <label className="multi-upload"> 
        <input 
          {...props}
          value={value}
          onChange={e=>handleChange(e)}
          type="file" 
          accept={accept || ".doc,.docx,.pdf,.png,.jpeg,.jpg,.zip"}
        /> 
        {children}
      </label>
      <div className="file-data" >
        {FilesData && FilesData.map((fileData , i) =>
          <div key={fileData.name}>
            <span>
              <p>
                {fileData.name}
              </p>
            </span>
            <button
              onClick={ ()=>{
                setImage(image.filter((file , index)=>index !== i));
                setFilesData(FilesData.filter((file , index)=>index !== i));
              }}
            >
                 ×
            </button>
          </div>
        ) }
      </div>
     
    </Style> 
  );
};
 
MultiUpload.propTypes = {
  accept: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any,
  resetFlag: PropTypes.bool,
};
 
export default MultiUpload;