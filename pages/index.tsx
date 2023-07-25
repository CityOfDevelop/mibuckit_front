import MainLayout from "@/components/app/Layout";
import Link from "next/link";
import path from "path";
import { useEffect, useState } from "react";

export default function Home() {
  const test = [
    {
      id: 1,
      path: "img/1.jpeg",
      name: "오은혜",
      cntn: "은혜약국",
    },
    {
      id: 2,
      path: "img/2.jpeg",
      name: "오은해",
      cntn: "베스트 드라이버",
    },
    {
      id: 3,
      path: "img/3.jpeg",
      name: "오은해",
      cntn: "멋쟁이",
    },
    {
      id: 4,
      path: "img/4.jpeg",
      name: "이승제",
      cntn: "배고파",
    },
    { id: 5, path: "img/5.jpeg", name: "오은혜", cntn: "은해이직" },
    { id: 6, path: "img/6.jpeg", name: "오은해", cntn: "마" },
    { id: 7, path: "img/7.jpeg", name: "이승제", cntn: "콩" },
    { id: 8, path: "img/8.jpeg", name: "이승제", cntn: "콩이" },
    { id: 9, path: "img/9.jpeg", name: "이승제", cntn: "페퍼민트" },
  ];

  const [isclicked1, setIsclicked1] = useState(false);
  const [isclicked2, setIsclicked2] = useState(false);

  const handleFilter = (buttonId: Number) => {
    if (buttonId == 1) {
      setIsclicked1((isclicked1) => !isclicked1);
      setIsclicked2(false);
    } else if (buttonId == 2) {
      setIsclicked2((isclicked2) => !isclicked2);
      setIsclicked1(false);
    }
  };

  const imgList = test.map((item) => (
    <a href="#" key={item.id} className="hover:scale-105 duration-150">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src={item.path} className=" h-[400px] object-fill w-full"></img>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{item.cntn}</p>
    </a>
  ));

  return (
    <MainLayout>
      <div className="bg-white h-full">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* 필터 부분 */}
          <div className="text-gray-700 flex space-x-3 border-b-2">
            <h1>정렬 :</h1>
            <button
              onClick={() => handleFilter(1)}
              className={
                isclicked1
                  ? "text-black font-bold"
                  : "hover:text-black hover:font-bold"
              }
            >
              최신순
            </button>
            <button
              onClick={() => handleFilter(2)}
              className={
                isclicked2
                  ? "text-black font-bold"
                  : "hover:text-black hover:font-bold"
              }
            >
              인기순
            </button>
          </div>
          {/* 이미지 출력 부분 스크롤엔드로 페이징 처리 필요 */}
          <div className="h-[1050px] overflow-auto scrollbar-hide py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {imgList}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
