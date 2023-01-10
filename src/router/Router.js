import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"

function Router () {
    return(
        <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          {/* <Route path="/profile/:nome" element={<PersonPage/>}/> */}
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default Router