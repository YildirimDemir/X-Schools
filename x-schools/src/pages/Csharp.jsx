import CsharpData from "../Data/CsharpData";
import SideBar from "../ui/SideBar";
import TutorialsMain from "../ui/TutorialsMain";

export default function Csharp() {

  const { csharp } = CsharpData();

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={csharp} />
      </div>
      <div className='page-content'>
      <TutorialsMain title={'C#'}/>
      </div>
    </div>
  )
}