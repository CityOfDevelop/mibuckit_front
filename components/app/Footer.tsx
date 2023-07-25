import { Fragment } from "react";

const navigation = [
  { name: "main", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classNamees: string[]) {
  return classNamees.filter(Boolean).join(" ");
}
//id나 class로 빼서 상위에서 css한꺼번에 설정하기
export default function Footer() { 
  return (
    //border-t-2
    <div className="relative bottom-0 w-screen bg-yellow-200 py-20">
      <div className="mx-auto max-w-7xl px-20">
        <div className="">
          <div className="basis-1/4">
            <ul className="flex flex-wrap flex-row items-stretch justify-between">
            <li className="basis-1/4 mb-4"><a>이용 약관</a></li>
            <li className="basis-1/4 mb-4"><a>회사 정보</a></li>
            <li className="basis-1/4 mb-4"><a>고객 센터</a></li>
            <li className="basis-1/4 mb-4"><a>입사 정보</a></li>
            <li className="basis-1/4 mb-4"><a>문의하기</a></li>
            <li className="basis-1/4 mb-4"><a>개인정보</a></li>
            <li className="basis-1/4 mb-4"><a>법적고지</a></li>
            <li className="basis-1/4 mb-4"><a>쿠키설정</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-20">
        <div className="">
          <div className="">
           <p className="mt-6 text-sm">미버킷코리아<br/>대표 : 오은혜만<br/>주소 : 대한민국 서울특별시 마포구 상암<br/>사업자등록번호 : 941022</p>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">메인</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">상세</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">프로필</a>
        </div>
      </div>
    </div>
  );
}
