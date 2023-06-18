import { Route,Routes } from "react-router-dom";
import {Home} from "../pages/home/Home";
import {Archive} from "../pages/archive/Archive";
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/archive" element={<Archive/>}/>
    </Routes>
  )
}
