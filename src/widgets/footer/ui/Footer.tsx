export default function Footer() {
  return (
    <footer className="bg-black/95 text-gray-300 border-t border-white/10">
      {/* 메인 푸터 */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
          {/* 푸터 네비게이션 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">서비스</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-primary transition-colors">타겟 메시징</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">앱 패키지</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">인플루언서 광고</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">매체</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-primary transition-colors">직방 & 호갱노노</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">카드사</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">통신사</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">회사</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-primary transition-colors">애드잇 소개</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">클라이언트</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">집행사례</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">지원</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-primary transition-colors">문의하기</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">개인정보처리방침</a></li>
                <li><a href="#" className="text-sm hover:text-primary transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold mb-6">
              주식회사 <span className="text-primary">애드잇</span>
            </h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">상호명</span>
                <span>: (주)애드잇</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">대표</span>
                <span>: 송영주</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">주소</span>
                <span>: 서울특별시 강남구 언주로 129길 6, 902호 3</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">고객센터</span>
                <span className="text-primary">: 02-6949-5032</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">E-mail</span>
                <span className="text-primary">: team@ad-it.co.kr</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright ⓒ 2026 애드잇 All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
