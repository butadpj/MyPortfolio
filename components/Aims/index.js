import style from "./Aims.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faObjectGroup,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Aims = () => {
  return (
    <section className={style.aims}>
      <main className={style.main}>
        <hr className={style.line} />
        <h2 className={style.headerText}>
          When building web apps, I always aim for...
        </h2>
        <div className={style.myAims}>
          <div className="fast">
            <FontAwesomeIcon icon={faBolt} className={style.aimIcon} />
            <p>Lightning Fast Performance</p>
          </div>
          <div className="design">
            <FontAwesomeIcon icon={faObjectGroup} className={style.aimIcon} />
            <p>Clean and Modern UI</p>
          </div>
          <div className="maintain">
            <FontAwesomeIcon
              icon={faTools}
              className={`${style.aimIcon} ${style.iconTool}`}
            />
            <p>Maintainable Code base</p>
          </div>
        </div>
        <hr className={style.line} />
      </main>
    </section>
  );
};

export default Aims;
