/* eslint-disable jsx-a11y/alt-text */
import Logo from "../imgs/Grape.svg";
export function IntroSection() {
  return (
    <div className="flex flex-col w-full px-[60px] md:px-[110px] gap-10">
      <div className="flex flex-row py-40 gap-20 items-center justify-center">
        <div className="flex flex-row justify-center items-center px-[60px] gap-4">
          <img src={Logo} className="h-[200px]" />
          <h1 className="font-chivo text-[100px]">Grapevine</h1>
        </div>
        <h2 className="font-roboto text-[32px] ">
          Services you'll love
          <br /> backed by people you trust
        </h2>
      </div>
    </div>
  );
}
