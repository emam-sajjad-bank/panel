import history from '../../router/history';


const logout = () =>{
  localStorage.clear();
  history.push("/login");
};



export default logout;