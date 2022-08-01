import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "../App"
import {Header, Other} from "../Components"

export default function RoutesConfig(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/header" element={<Header />} />
      <Route path="/other" element={<Other />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}