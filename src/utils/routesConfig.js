import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "../App"
import {Header, Other} from "../Components"

export default ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Header />} />
        <Route path="other" element={<Other />}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}