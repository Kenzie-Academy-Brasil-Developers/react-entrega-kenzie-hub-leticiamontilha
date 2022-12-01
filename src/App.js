import { RoutesMain as Routes } from "./Routes";
import GlobalStyle from "./Style/GlobalStyles";
import { ToastContainer } from "react-toastify"



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
      <Routes/>
    </>
  );
}

export default App;
