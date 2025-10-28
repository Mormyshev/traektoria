import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="bg-gray-100 w-full p-4 flex items-center border-b-1">
      <img src={logo} alt="Логотип" className="w-[30px] h-[30px]" />
      <span className="ml-2 text-[#3d7aa5] font-semibold">ТРАЕКТОРИЯ</span>
    </div>
  );
};

export default Header;
