import SideBar from "../ui/SideBar";
import CSSData from "../Data/CSSData";

export default function Css() {

    const { css } = CSSData();

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={css} />
            </div>
            <div className='page-content'>

            </div>
        </div>
    )
}