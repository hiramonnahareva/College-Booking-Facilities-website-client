
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
// import AddRecipe from "./Pages/AddRecipe/AddRecipe";
// import colleges from "./Pages/Colleges/";
// import RecipeDetails from "./Pages/CollegeDetails/CollegeDetails";
// import ProtectedRoute from "./Hooks/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import PurchaseCoins from "./Pages/Payment/Purchase";
import Footer from "./Pages/Shared/Footer";
import NotFound from "./Pages/NotFound";
import Colleges from "./Pages/Colleges/Colleges";
import CollegeDetails from "./Pages/CollegeDetails/CollegeDetails";
import Admission from "./Pages/Admission/Admission";
import MyCollege from "./Pages/MyCollege/MyCollege";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import ProtectedRoute from "./Hooks/ProtectedRoute";
import MyProfile from "./Pages/MyProfile/MyProfile";


const App = () => {
  

  return (
    <div className="">
      <Navbar /> 
       <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/colleges' element={< Colleges/>}></Route>
      <Route path='/my-profile' element={< MyProfile/>}></Route>
      <Route path='/my-college' element={
        <ProtectedRoute>
        < MyCollege/>
        </ProtectedRoute>
        }></Route>
      <Route path='/admission' element={< Admission/>}></Route>
      <Route path='/login' element={< Login/>}></Route>
      <Route path='/signup' element={< Signup/>}></Route>
      

      {/* <Route path='/add-recipe' element={
        <ProtectedRoute>
          <AddRecipe />
        </ProtectedRoute>
      }></Route> */}
      <Route path='/college/:id' element={
          <CollegeDetails/>
      }>
        
      </Route>
      {/* <Route path='/purchaseCoin' element={
        <ProtectedRoute>
          <PurchaseCoins/>
        </ProtectedRoute>
      }></Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    
    <ToastContainer/>
    </div>
  );
};

export default App;