import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/common/nav";
import Home from "./routes/home";
import Loading from "./components/common/loading";
import Profile from "./routes/auth/profile";
import Articles from "./routes/article/articleList";
import ArticleDetail from "./routes/article/articleDetail";
import ArticleCreate from "./routes/article/articleCreate";
import ArticleUpdate from "./routes/article/articleUpdate";
import CounselorList from "./routes/counsel/counselorList";
import CounselorDetail from "./routes/counsel/counselorDetail";
import CounselorEvaluation from "./routes/counsel/counselEvaluation";
import ReservationFirst from "./routes/counsel/reservation/reservationFirst";
import ReservationSecond from "./routes/counsel/reservation/reservationSecond";
import ReservationConfirm from "./routes/counsel/reservation/reservationConfirm";
import Notification from "./components/common/notification";
import NotFound from "./routes/notFound";
import ModalTest from "./routes/test";
import Signup from "./routes/auth/signup/signup";
import Agree from "./routes/auth/signup/agree";
import Information from "./routes/auth/signup/information";
import Selection from "./routes/auth/signup/selection";
import SelfTest from "./routes/etc/selfTest";
import Bamboo from "./routes/etc/bamboo";
import CounselingNotice from "./components/counsel/counselingNotice";
import CounselingCounselor from "./components/counsel/counselingCounselor";
import CounselingClient from "./components/counsel/counselingClient";
import Vendingmachine from "./components/common/vendingmachine";
import ComingSoon from "./components/ppt/comingSoon";

// 중첩라우팅
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <Vendingmachine />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          // auth
          {
            path: "profile/:name",
            element: <Profile />,
          },
          {
            path: "/signup",
            element: <Selection />,
          },
          {
            path: "/signup/agree",
            element: <Agree />,
          },
          {
            path: "/signup/information",
            element: <Information />,
          },
          {
            path: "/signup/complete",
            element: <Signup />,
          },
          // counsel
          {
            path: "counselors",
            element: <CounselorList />,
          },
          {
            path: "counselors/:name",
            element: <CounselorDetail />,
          },
          {
            path: "counselors/:name/reservation/first",
            element: <ReservationFirst />,
          },
          {
            path: "counselors/:name/reservation/second",
            element: <ReservationSecond />,
          },
          {
            path: "counselors/:name/reservation/confirm",
            element: <ReservationConfirm />,
          },
          {
            path: "counselors/:name/evaluation",
            element: <CounselorEvaluation />,
          },
          // article
          {
            path: "/articles",
            element: <Articles />,
          },
          {
            path: "/articles/:id",
            element: <ArticleDetail />,
          },
          {
            path: "/articles/create",
            element: <ArticleCreate />,
          },
          {
            path: "/articles/update",
            element: <ArticleUpdate />,
          },
          // etc
          {
            path: "self-test",
            element: <SelfTest />,
          },
          {
            path: "bamboo",
            element: <Bamboo />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    path: "/test",
    element: <ModalTest />,
  },
  // pop-up 이놈은 라우터로 받을 거는 아닌데 확인은 해봐야하니깐 그냥 만들어 봤음용
  {
    path: "/counseling/:counselId/notice",
    element: <CounselingNotice />,
  },
  {
    path: "/counseling/:counselId/counselor",
    element: <CounselingCounselor />,
  },
  {
    path: "/counseling/:counselId/client",
    element: <CounselingClient />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);

function App() {
  // 로딩 설정(2초)
  const [loading, setLoading] = useState(true);
  const init = async () => {
    setTimeout(() => setLoading(false), 500);
  };

  // useEffect: 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
  useEffect(() => {
    init();
  }, []);

  return <>{loading ? <Loading /> : <RouterProvider router={router} />}</>;
}

export default App;
