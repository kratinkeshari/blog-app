import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layout/MainLayout.jsx";
import Loader from "./components/common/Loader/Loader.jsx"; // or any lightweight loader

const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const BlogFeedPage = lazy(() => import("./pages/BlogFeedPage.jsx"));
const CreateBlogPage = lazy(() => import("./pages/CreateBlogPage.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<BlogFeedPage />} />
          <Route path="/create" element={<CreateBlogPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
