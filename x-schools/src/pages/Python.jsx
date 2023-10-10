import SideBar from "../ui/SideBar";
import PythonData from "../Data/PythonData";
import TutorialsMain from "../ui/TutorialsMain";

export default function Python() {

  const { python } = PythonData();

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={python} />
      </div>
      <div className='page-content'>
      <TutorialsMain title={'Python'}/>
      </div>
    </div>
  )
}