

const authenticator = () =>{
  if(localStorage.getItem("verifyExp")) return true;
  else return false;
};
export default authenticator;