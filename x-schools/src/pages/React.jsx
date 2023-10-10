import SideBar from "../ui/SideBar";
import ReactData from "../Data/ReactData";
import TutorialsMain from "../ui/TutorialsMain";

export default function React() {

  const { react } = ReactData();

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={react} />
      </div>
      <div className='page-content'>
        <TutorialsMain title={'React'}/>
      </div>
    </div>
  )
}