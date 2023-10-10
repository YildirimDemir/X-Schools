import SideBar from "../ui/SideBar";
import CSSData from "../Data/CSSData";
import TutorialsMain from "../ui/TutorialsMain";

export default function Css() {

    const { css } = CSSData();

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={css} />
            </div>
            <div className='page-content'>
            <TutorialsMain title={'CSS'}/>
            </div>
        </div>
    )
}