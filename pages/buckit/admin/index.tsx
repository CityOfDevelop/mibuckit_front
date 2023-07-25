import MainLayout from "@/components/app/Layout";
import { useEffect, useState } from "react";

export default function Profile() {
  const [tabIndex, setTabIndex] = useState(1);

  const [name, setName] = useState("");

  const handleTab = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const name = localStorage.getItem("NAME");
    if (name != null) {
      setName(name);
    }
  }, []);

  return (
    <MainLayout>
      {/* 개발자 디자이너 구분 필요할듯 - 우선 디자이너 기준 */}
      {/* 전체적으로 sm md lg 설정이 필요함 - 반응형 */}
      {/* 프로필 main wrap */}
      <div className="w-screen h-screen flex justify-between p-20">
        {/* 왼쪽 : 프로필 사진 및 정보? */}
        <div className="w-2/12 min-w-220 mr-10 text-center">
          {/* 프로필 사진 : 원형 */}
          <div className="flex justify-center">
            <img
              src="/img/8.jpeg"
              className="w-[220px] h-[220px] rounded-full"
            />
          </div>
          {/* 닉네임? */}
          <div className="mt-5 font-extrabold text-lg">{name}</div>
          {/* 한줄 자기소개? */}
          <p className="mt-10">
            안녕하세요. <br />
            미친 개발자입니다.
          </p>
          {/* 프로필 수정하기 버튼? */}
          <div className="mt-16 h-12 rounded-xl hover:bg-slate-400 duration-150 flex justify-center border">
            <button className="w-full">프로필 수정하기</button>
          </div>
        </div>

        {/* 오른쪽 : 탭 있는 화면 */}
        <div className="w-10/12">
          <div className="w-full border-b-2 pb-3">
            <div className="flex justify-between w-48">
              {/* Tab1 이름: 버킷, 설명: 작업목록? */}
              <button
                onClick={() => handleTab(1)}
                className="hover:text-black hover:font-bold"
              >
                버킷
              </button>
              {/* Tab2 이름: 이력서, 설명: 깔끔한 이력내용 및 인쇄? */}
              <button
                onClick={() => handleTab(2)}
                className="hover:text-black hover:font-bold"
              >
                이력서
              </button>
              {/* Tab3 이름: 관심, 설명: 하트를 누른 사람&기업&버킷 게시물? */}
              <button
                onClick={() => handleTab(3)}
                className="hover:text-black hover:font-bold"
              >
                관심
              </button>
            </div>
          </div>
          {/* 탭별 화면 component wrap */}
          <div className="w-full h-screen mt-10">
            {tabIndex == 1 ? (
              <div>1</div>
            ) : tabIndex == 2 ? (
              <div>2</div>
            ) : (
              <div>3</div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
