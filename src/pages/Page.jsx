import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import { Route, Routes } from "react-router-dom";

function Page() {
    return (<Routes >
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Blog />} />
    </Routes>)
}

export default Page;