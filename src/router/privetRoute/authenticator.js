

const authenticator = () =>{
  if(localStorage.getItem("token")) return true;
  else return false;
};
export default authenticator;