import Link from "next/link";
import { document } from "postcss";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Navbar() {
  // 테스트 데이터 - API로 변경
  const [notiData, setNotiData] = useState([
    {
      id: "1",
      cntn: "안녕하세요 아무개님 회원가입을 축하합니다.",
    },
    {
      id: "2",
      cntn: "공지사항",
    },
    {
      id: "3",
      cntn: "길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트",
    },
    {
      id: "4",
      cntn: "길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트",
    },
    {
      id: "5",
      cntn: "길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트길이테스트",
    },
  ]);
  const [logOn, setLogOn] = useState("off");
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const logoutTest = () => {
    localStorage.clear();
    setLogOn("off");
  };

  const toggleProfile = () => {
    setIsSettingOpen((isSettingOpen) => !isSettingOpen);
    setIsNotiOpen((isSettingOpen) => false);
    console.log(isSettingOpen);
  };

  const toggleNoti = () => {
    setIsNotiOpen((isNotiOpen) => !isNotiOpen);
    setIsSettingOpen((isNotiOpen) => false);
    console.log(isNotiOpen);
  };

  const NotiList = notiData.map((item) => (
    <div
      id={item.id}
      key={item.id}
      className="notiList p-2 text-ellipsis overflow-hidden flex justify-between h-[55px] mb-3 text-sm border-solid border-2 border-white-500"
    >
      <div className="mr-3">
        <p className="">{item.cntn}</p>
      </div>
      <div className="text-gray-500">
        <button onClick={() => deleteNoti(item.id)}>X</button>
      </div>
    </div>
  ));

  const notiItem = useRef(null);

  // 읽음Y/N 처리 필요
  const deleteNoti = (id: string) => {
    console.log(id);
    setNotiData(notiData.filter((notiItem) => notiItem.id != id));
  };

  // 읽음Y/N 처리 필요
  const deleteAllNoti = () => {
    setNotiData([]);
  };

  // localStorage는 렌더링 후에 생성으로 uesEffect 사용해서 호출
  useEffect(() => {
    const login = localStorage.getItem("ACCESS_TOKEN");
    if (login != null) {
      setLogOn("on");
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div className=" bg-gray-800  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              ></img>
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              ></img>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-3">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  메인
                </Link>
                <Link
                  href="/buckit/detl"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  상세
                </Link>
                <Link
                  href="/buckit/detl"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  상세2
                </Link>
                <Link
                  href="/buckit/profile"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  프로필
                </Link>
                <Link
                  href="/buckit/admin"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  프로필
                </Link>
              </div>
            </div>
          </div>
          {/* 오른쪽 구역 */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {logOn != "on" ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  <Link
                    href="/entr/signIn"
                    className="hidden text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium lg:inline"
                  >
                    로그인
                  </Link>
                  <Link
                    href="/entr/signUp"
                    className="hidden text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium lg:inline"
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="relative ml-3">
                  <div>
                    {/* 알림버튼 */}
                    <button
                      type="button"
                      className="lg:inline rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={toggleNoti}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* 알림 아래 div */}
                  <div
                    className={
                      (isNotiOpen ? "" : "hidden" + " ") +
                      "overflow-auto scrollbar-hide py-5 px-5 absolute right-0 z-10 mt-2 w-[300px] h-[320px] origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <div className=" sh-5 mb-3 flex justify-between">
                      <label className="text-sm text-gray-700">알림</label>
                      {/* 모두삭제 버튼은 전체 읽음 처리가 안된 부분 읽음(Y)으로 처리 */}
                      <button
                        className="text-sm text-gray-700"
                        onClick={deleteAllNoti}
                      >
                        모두삭제
                      </button>
                    </div>
                    {/* 알림 리스트 */}
                    {NotiList}
                  </div>
                </div>
                {/* 프로필 이미지 */}
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="lg:inline flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleProfile}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/img/8.jpeg"
                        alt=""
                      ></img>
                    </button>
                  </div>
                  {/* 프로필 사진 아래 div */}

                  <div
                    className={
                      (isSettingOpen ? "" : "hidden" + " ") +
                      "absolute flex flex-col text-center right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href="/buckit/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      내 프로필
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      계정 설정
                    </Link>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={logoutTest}
                    >
                      로그아웃
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            메인
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            상세
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            프로필
          </Link>
        </div>
      </div>
    </nav>
  );
}
