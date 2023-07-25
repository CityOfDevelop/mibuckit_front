import Link from "next/link";

export default function page404() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="text-center">
        <img src="/404NotFound.png" className="W-[500px] h-[500px]" />
        <div className="animate-bounce">
          <Link href="/" className="p-3 bg-gray-500 text-white rounded-md ">
            홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
