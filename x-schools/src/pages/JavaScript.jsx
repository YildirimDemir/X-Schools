import SideBar from "../ui/SideBar";

export default function JavaScript(){
    const jsPath = [
        {path: '/javascript/intro', item: 'JS Intro'},
        {path: '/javascript/dom', item: 'JS DOM'},
        {path: '/javascript/api', item: 'JS API'},
        {path: '/javascript/function', item: 'JS Function'},
        {path: '/javascript/array', item: 'JS Array'},
    ]
    return(
        <SideBar list={jsPath}/>
    )
}