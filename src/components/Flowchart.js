import "./Flowchart.css";
import WorkFlow from "../tools/WorkFlow";
import { howWeWork } from "../tools/data";
import trophyImage from "../images/Trophy_perspective_matte.png";

function Flowchart() {
  return (
    <div className="flow-container">
      <ol className="level-1-wrapper">
        <li>
          <div className="level-1 rectangle">
            <WorkFlow jobs={howWeWork} index={0} />
          </div>
        </li>
        <li>
          <div className="level-1 rectangle">
            <WorkFlow jobs={howWeWork} index={2} />
          </div>
        </li>
      </ol>
      <ol className="level-2-wrapper">
        <li>
          <div className="level-2 rectangle">
            <WorkFlow jobs={howWeWork} index={1} />
          </div>
        </li>
        <li>
          <div className="level-2 rectangle">
            <WorkFlow jobs={howWeWork} index={3} />
          </div>
        </li>
      </ol>
      <div className="level-3">
        <img src={trophyImage} />
      </div>
      <div className="level-3-wrapper"></div>
    </div>
  );
}

export default Flowchart;
