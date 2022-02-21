type InputProps = {};

const Input: React.VFC<InputProps> = (props) => {
  return (
    <label className="h-full relative">
      <input className="h-full lg:min-w-[500px] outline-none p-3 text-black input__component" type="text" name="email" />
      <span className="absolute top-1/2 left-3 transform -translate-y-1/2 transition-all duration-200 text-[#8c8c8c] select-none input__placeholder">
        Email address
      </span>
    </label>
  );
};

export default Input;
