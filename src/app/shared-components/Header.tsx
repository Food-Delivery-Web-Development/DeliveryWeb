import UserIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-primary p-4 flex justify-between items-center px-24 h-fit">
      <button className="text-4xl font-bold" onClick={() => navigate('/home')}>
        THE KIICHEN
      </button>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold ">Profile</h2>
        <UserIcon />
      </div>
    </header>
  );
}

export { Header };
