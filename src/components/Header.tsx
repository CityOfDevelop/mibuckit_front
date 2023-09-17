import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  // TODO: 정진 : Header 링크, 항목 따로 배열로 관리하기
  return (
    <div className="flex items-center justify-between w-4/5 h-20 bg-white">
      <div className="flex items-center gap-6">
        <div className="text-[#90BD10] font-bold" onClick={() => navigate('/')}>
          PurDream
        </div>
        <div className="text-[#6D6D6D]" onClick={() => navigate('/mypage')}>
          텃밭
        </div>
        <div className="text-[#6D6D6D]" onClick={() => navigate('/mypage')}>
          식물찾기
        </div>
        <div className="text-[#6D6D6D]" onClick={() => navigate('/mypage')}>
          커뮤니티
        </div>
        <div className="text-[#6D6D6D]" onClick={() => navigate('/mypage')}>
          주말농장
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div id="search_bar" className="w-32 h-5 bg-gray-200 rounded-lg" />
        <button id="logout_button" className="px-2 py-1 border rounded-lg">
          로그아웃
        </button>
        <div id="user_avatar" className="w-12 h-12 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
