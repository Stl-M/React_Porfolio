import * as  AiIcons  from 'react-icons/ai'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: 'about',
        icon: <AiIcons.AiFillLayout />,
        cName: 'nav-text'
    },
   
    
    {
        title: 'Projects',
        path: 'projects',
        icon: <AiIcons.AiFillFolderOpen />,
        cName: 'nav-text'
    },
    /* {
        title: 'Mern',
        path: 'mern',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    }, */

    {
        title: 'Résume',
        path: 'resume',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    
    {
        title: 'Get in Touch',
        path: 'contact',
        icon: <AiIcons.AiFillSchedule />,
        cName: 'nav-text'
    }
]