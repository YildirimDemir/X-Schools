import SideBar from '../ui/SideBar';
import SQLData from '../Data/SQLData';

export default function SQL() {

    const { SQL } = SQLData();

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={SQL} />
            </div>
            <div className='page-content'>

            </div>
        </div>
    )
}