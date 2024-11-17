import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRouter = () => {
const{user}=useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;