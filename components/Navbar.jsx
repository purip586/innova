import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-6 md:px-16 mx-auto flex justify-center md:justify-between">
      <Image
        src="/logo_trans.png"
        alt="INNOVA IT LOGO"
        width={250}
        height={100}
      />
    </div>
  );
};

export default Navbar;
