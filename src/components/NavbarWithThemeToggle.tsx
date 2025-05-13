
import Navbar from '@/components/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';

const NavbarWithThemeToggle = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavbarWithThemeToggle;
