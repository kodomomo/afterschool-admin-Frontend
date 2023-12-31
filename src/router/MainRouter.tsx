import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    AfterSchoolClassCreate,
    AfterSchoolClassDetail,
    AfterSchoolClassList,
    AfterSchoolCourseCreate,
    AfterSchoolCourseDetail,
    AfterSchoolCourseList,
    Login,
    NotFound,
} from "../pages";
import ServiceLayout from "../components/services/layouts";
import Header from "../components/header";
import AfterSchoolApplication from "../pages/service/afterSchool application/AfterSchoolApplication";
import Main from "../pages/service/main/Main";
import AfterSchoolCourseCreatePage from "../pages/service/afterSchoolCourse/AfterSchoolCourseCreate";
import AfterSchoolClassListPage from "../pages/service/afterSchoolClass/AfterSchoolClassList";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="main" element={<Main />} />

            <Route path="after-school-class">
              <Route path="index" element={<AfterSchoolClassList />} />
              <Route path="create" element={<AfterSchoolClassCreate />} />
              <Route path=":id" element={<AfterSchoolClassDetail />} />
            </Route>

            <Route path="after-school-course">
              <Route path="index" element={<AfterSchoolCourseList />} />
              <Route path="create" element={<AfterSchoolCourseCreatePage />} />
              <Route path=":id" element={<AfterSchoolCourseDetail />} />
            </Route>

            <Route path="after-school-application">
              <Route path="application" element={<AfterSchoolApplication />} />
          </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;