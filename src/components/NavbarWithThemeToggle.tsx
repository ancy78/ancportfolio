
import Navbar from '@/components/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';

const NavbarWithThemeToggle = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Changed from absolute positioning to being part of the navbar */}
    </div>
  );
};

export default NavbarWithThemeToggle;
