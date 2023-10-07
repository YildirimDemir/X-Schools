import SideBar from "../ui/SideBar";
import PythonData from "../Data/PythonData";

export default function Python() {

  const { python } = PythonData();

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={python} />
      </div>
      <div className='page-content'>
      </div>
    </div>
  )
}