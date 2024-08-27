import guardian from "@/assets/images/guardian.png";
import graduate from "@/assets/images/graduate.png";
import group from "@/assets/images/group.png";
import chat from "@/assets/images/chat.png";
import HeaderLogoChatNotify from "@/components/Header/HeaderLogoChatNotify";

function MainPage() {
  return (
    <div>
      <HeaderLogoChatNotify />
      <div className="bg-[#F5F6FA] min-h-screen flex flex-col items-center">
        {/* 상단 바 영역 */}
        <div className="bg-[#167CFA] w-full h-[300px] flex flex-col pt-8 px-6 pb-0 text-white">
          {/* 상단 텍스트 블록 */}
          <div className="flex flex-col justify-start h-full">
            <p className="text-[16pt] leading-tight">
              금융 위협으로부터 <br /> 가족을 지키는
              <br />{" "}
              <strong className="text-[20pt] leading-loose">
                신한: 더 가디언즈
              </strong>
            </p>
          </div>

          {/* 이름과 레벨 정보 컨테이너 */}
          <div className="flex justify-center items-end h-full">
            <div className="bg-white w-full h-[120px] p-4 rounded-t-[10px] text-center text-black flex justify-between items-center">
              {/* 이름을 별도의 flex 컨테이너에 넣어 items-start 적용 */}
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl font-bold text-left">
                  김신한<span className="text-xl">고객님</span>
                </h1>
                <p className="text-[10pt] text-gray-700 mt-1">
                  현재 그룹원이 _ 명입니다.
                </p>
              </div>

              {/* 우측 이미지와 Owner 텍스트 */}
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/images/default.png"
                  alt="프로필 이미지"
                  className="w-[44px] h-[44px] rounded-full mb-2"
                />
                <span className="text-[10pt] text-gray-900">Owner</span>
              </div>
            </div>
          </div>
        </div>

        {/* 메뉴들 */}
        <div className="px-6">
          <div className="mb-6 p-6 flex justify-between items-center bg-[#EBF0FD] py-4 rounded-[20px]">
            <div className="flex-1 flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-[20px]">
                그룹원 초대하기
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 justify-items-center">
            {/* 가디언 평가 */}
            <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
              <div className="flex">
                <img
                  src={guardian}
                  alt="가디언 평가"
                  className="w-[55px] h-[55px]"
                />
              </div>
              <div>
                <span className="text-[12pt] font-bold">가디언 평가</span>
                <p className="text-[#888888] text-[10pt] mt-1">
                  가디언 평가에 <br /> 도전해보세요.
                </p>
              </div>
            </div>

            {/* 문제 은행 */}
            <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
              <div className="flex">
                <img
                  src={graduate}
                  alt="문제 은행"
                  className="w-[55px] h-[55px]"
                />
              </div>
              <div>
                <span className="text-[12pt] font-bold">문제 은행</span>
                <p className="text-[#888888] text-[10pt] mt-1">
                  다양한 문제들로 <br /> 연습해보세요.
                </p>
              </div>
            </div>

            {/* 그룹원 목록 */}
            <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
              <div className="flex">
                <img
                  src={group}
                  alt="그룹원 목록"
                  className="w-[55px] h-[55px]"
                />
              </div>
              <div>
                <span className="text-[12pt] font-bold">그룹원 목록</span>
                <p className="text-[#888888] text-[10pt] mt-1">
                  현재 그룹원의 <br /> 목록 조회해보세요.
                </p>
              </div>
            </div>

            {/* 프로필 편집 */}
            <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
              <div className="flex">
                <img src={chat} alt="챗봇" className="w-[55px] h-[55px]" />
              </div>
              <div>
                <span className="text-[12pt] font-bold">챗봇</span>
                <p className="text-[#888888] text-[10pt] mt-1">
                  챗봇을 통해 <br /> 학습할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;