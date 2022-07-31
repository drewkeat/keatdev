import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from "../App"
import {ContactMe, Blog, Projects} from "../Containers"

export default function RoutesConfig(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-me" element={<ContactMe />}/>
      <Route path="/projects" element={<Projects />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}