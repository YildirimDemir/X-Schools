import CsharpData from "../Data/CsharpData";
import SideBar from "../ui/SideBar";

export default function Csharp() {

  const { csharp } = CsharpData();

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={csharp} />
      </div>
      <div className='page-content'>

      </div>
    </div>
  )
}