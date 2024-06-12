import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
import swal from 'sweetalert';

const ProtectedRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
        const location = useLocation();
        if(loading){
            return <Loading></Loading>
        }
      
        if (!user) {
            swal({
                title: "Please Login!",
                text: "You need to login for enter this route.",
                icon: "warning",
                dangerMode: true,
              })
          return <Navigate to="/" state={{ from: location }} replace />;
        }
      
        return children;
};

export default ProtectedRoute;