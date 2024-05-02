import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./frachers/Auth/AuthSlice";
import authServices from "./Appwrite/Auth";

function App() {
  const [Loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        
        userData ? dispatch(login({ userData })) : dispatch(logout());
      })
      .finally(() => setLoding(false));
  }, []);

  return !Loding ? (
    <>
      <h1>hii from blog</h1>
    </>
  ) : (
    <div>Loding</div>
  );
}

export default App;
