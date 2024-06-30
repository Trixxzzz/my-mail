import PhotoIcon from '@mui/icons-material/Photo';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
export const SIDEBAR_DATA=[
    {
        name:'inbox',
        title:'Inbox',
        icon:PhotoIcon
    },
    {
        name:'starred',
        title:'Starred',
        icon:StarOutlineIcon
    },
    {
        name:'sent',
        title:'Sent',
        icon:SendOutlinedIcon
    },
    {
        name:'drafts',
        title:'Draft',
        icon:InsertDriveFileOutlinedIcon
    },
    {
        name:'bin',
        title:'Bin',
        icon:DeleteOutlineOutlinedIcon
    },
    {
        name:'allmail',
        title:'All mail',
        icon:MailOutlinedIcon
    },
]