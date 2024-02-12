import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/common/nav";
import Home from "./routes/home/home";
import Loading from "./routes/etc/loading";
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
import NotFound from "./routes/etc/notFound";
import ModalTest from "./routes/test";
import SelfTest from "./routes/etc/selfTest";
import Bamboo from "./routes/bamboo/bamboo";
import CounselingNotice from "./routes/counsel/counselingNotice";
import CounselingCounselor from "./routes/counsel/counselingCounselor";
import CounselingClient from "./routes/counsel/counselingClient";
import Vendingmachine from "./components/common/vendingmachine";
import Chat from "./routes/chat";
import Room from "./components/chat/room";
import List from "./components/chat/list";
import MyScrab from "./components/auth/profile/myScrab";
import MyReservation from "./components/auth/profile/myReservation";
import MyArticle from "./components/auth/profile/myArticle";
import MyReview from "./components/auth/profile/myReview";
import MyCounsel from "./components/auth/profile/myCounselCounselor";
import MyGathering from "./components/auth/profile/myGathering";
import PasswordChange from "./components/auth/profile/passwordChange";
import MyInfoClient from "./components/auth/profile/myInfoClient";
import MyInfoCounselor from "./components/auth/profile/myInfoCounselor";

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
            path: "profile/",
            element: <Profile />,
            children: [
              {
                path: "myInfo",
                element: <MyInfoClient />
              },
              {
                path: "myScrab",
                element: <MyScrab />
              },
              {
                path: "myReservation",
                element: <MyReservation />
              },
              {
                path: "myArticle",
                element: <MyArticle />
              },
              {
                path: "myReview",
                element: <MyReview />
              },
              {
                path: "myCounsel",
                element: <MyCounsel />
              },
              {
                path: "myGathering",
                element: <MyGathering />
              },
              {
                path: "passwordChange",
                element: <PasswordChange />
              }
            ]
          },
          // // counsel
          {
            path: "counselors",
            element: <CounselorList />,
          },
          {
            path: "counselors/:counselorSeq",
            element: <CounselorDetail />,
          },
          {
            path: "counselors/:counselorSeq/reservation/first",
            element: <ReservationFirst />,
          },
          // {
          //   path: "counselors/:counselorSeq/reservation/second",
          //   element: <ReservationSecond />,
          // },
          {
            path: "counselors/:counselorSeq/reservation/confirm",
            element: <ReservationConfirm />,
          },
          // {
          //   path: "counselors/:name/evaluation",
          //   element: <CounselorEvaluation />,
          // },
          // // article
          {
            path: "/articles/:boardType",
            element: <Articles />,
          },
          {
            path: "/articles/:boardType/:boardSeq",
            element: <ArticleDetail />,
          },
          {
            path: "/articles/create",
            element: <ArticleCreate />,
          },
          // {
          //   path: "/articles/update",
          //   element: <ArticleUpdate />,
          // },
          // // etc
          // {
          //   path: "self-test",
          //   element: <SelfTest />,
          // },
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
    path: "/chat12",
    element: <Chat />,
  },
  {
    path: "/chat",
    element: <List />,
  },
  {
    path: "/chat/room/:roomId",
    element: <Room />
  }
  // {
  //   path: "/test",
  //   element: <ModalTest />,
  // },
  // // pop-up 이놈은 라우터로 받을 거는 아닌데 확인은 해봐야하니깐 그냥 만들어 봤음용
  // {
  //   path: "/counseling/:counselId/notice",
  //   element: <CounselingNotice />,
  // },
  // {
  //   path: "/counseling/:counselId/counselor",
  //   element: <CounselingCounselor />,
  // },
  // {
  //   path: "/counseling/:counselId/client",
  //   element: <CounselingClient />,
  // },
  // {
  //   path: "/comingsoon",
  //   element: <ComingSoon />,
  // },
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

  return (
    <>
        {loading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
