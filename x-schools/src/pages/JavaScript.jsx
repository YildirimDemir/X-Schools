import SideBar from "../ui/SideBar";
import JavascriptData from "../Data/JavascriptData";

export default function JavaScript() {

  const { javascript } = JavascriptData();

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={javascript} />
      </div>
      <div className='page-content'>

      </div>
    </div>
  )
}