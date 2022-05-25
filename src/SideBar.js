import { DiGithubBadge, DiHtml5, DiLinux, DiVisualstudio, DiJsBadge } from 'react-icons/di';

const SideBar = () => {
    return (
        <div className="dark fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-100 text-gray-900 dark:bg-primary dark:text-white shadow-lg">
            <SideBarIcon icon={<DiGithubBadge size="30"/>}/>
            <SideBarIcon icon={<DiHtml5 size="30"/>}/>
            <SideBarIcon icon={<DiLinux size="30"/>}/>
            <SideBarIcon icon={<DiVisualstudio size="30"/>}/>
            <SideBarIcon icon={<DiJsBadge size="30"/>}/>
        </div>
    ); 
}; 

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar; 