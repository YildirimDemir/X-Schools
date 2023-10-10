import SideBar from '../ui/SideBar';
import SQLData from '../Data/SQLData';
import TutorialsMain from '../ui/TutorialsMain';

export default function SQL() {

    const { SQL } = SQLData();

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={SQL} />
            </div>
            <div className='page-content'>
            <TutorialsMain title={'SQL'}/>
            </div>
        </div>
    )
}