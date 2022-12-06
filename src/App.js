import { RoutesMain as Routes } from "./Routes";
import GlobalStyle from "./Style/GlobalStyles";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Contexts/UserContext";

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle/>
      <UserProvider>
        <Routes/>
      </UserProvider>
    </>
  );
}

export default App;
