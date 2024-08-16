import ProgressionBar from "./ProgressionBar";

function TestBox(props){
    return (
        <div className="test-box">
            <div className="test-number">{props.number}/16</div>
            <ProgressionBar></ProgressionBar>
            <div className="test-content-box">
                <div className="test-content">{props.testContent}</div>
            </div> 
        </div>
    );
}
export default TestBox;