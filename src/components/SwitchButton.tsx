import Switcher from "./Switcher";

const SwitchButton = () => {
  return (
    <button className="z-50 fixed bottom-4 right-4 border border-[#101314] dark:border-white bg-white hover:bg-gray-200 dark:bg-[#101314] dark:hover:bg-black text-white font-bold p-3 rounded shadow-lg">
      <Switcher />
    </button>
  );
};

export default SwitchButton;
