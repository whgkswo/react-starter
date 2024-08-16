import MobileHeader from "../../components/MobileHeader";
import TestBox from "../../components/TestBox";

function MbtiTest(){
    return (
        <div className="mobile-background">
            <div className="mobile-background-black"></div>
            <div className="mobile-background-white">
                <MobileHeader></MobileHeader>
                <TestBox number={1} testContent='시험 결과를 기다리는 중 기분이 어때 라는 질문에 당신의 대답은?'></TestBox>
                <div className="test-response-container">
                    <button className="test-response">조금 초조해</button>
                    <button className="test-response">결과는 결과일 뿐이야</button>
                    <button className="test-response">잘 나왔으면 좋겠어</button>
                    <button className="test-response">이미 끝난 일이니까 잊고 있어</button>
                </div>
            </div>
            <div className="mobile-background-black"></div>
        </div>
    );
}
export default MbtiTest;