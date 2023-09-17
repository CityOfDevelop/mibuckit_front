import Layout from '../components/Layout';

export default function Home() {
  const mockData: string[] = ['상자 1', '상자 2', '상자 3', '상자 4'];

  return (
    <>
      {/* TODO: 정진 : 컴포넌트 분리하기 */}
      <Layout>
        <>
          {/* <div className="w-4/5 h-60 bg-red-50">hi</div> */}
          <div className="w-4/5 ">
            <div id="banner" className="w-full bg-gray-300 h-96" />
            <div id="months_plant" className="mt-20">
              <span className="text-[#90BD10] font-bold">이달의 식물</span>
              <div className="flex gap-4 mt-2">
                {mockData.map((item, index) => (
                  <div key={index} className="flex-grow h-40 bg-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div id="gardening_tip" className="mt-20">
              <span className="text-[#90BD10] font-bold">가드닝 팁!</span>
              <div className="flex gap-4 mt-2">
                {mockData.map((item, index) => (
                  <div key={index} className="flex-grow h-40 bg-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
