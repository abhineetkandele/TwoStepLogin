import { useRef } from "react";

const PasswordAuth = ({ validatePassword, passwordError }) => {
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword && validatePassword(passwordRef.current.value);
  };

  return (
    <div>
      <form>
        <div>
          <input
            placeholder=" "
            ref={passwordRef}
            type="password"
            required
            id="password"
            className="p-1 pt-4 border-2 rounded-md border-purple-500 w-[200px] peer "
          />
          <label
            htmlFor="password"
            className="absolute text-sm duration-300 transform ml-[-205px] scale-75 text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-black peer-placeholder-shown:translate-y-3 peer-placeholder-shown:translate-x-3 peer-focus:-translate-x-0 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-purple-500"
          >
            Enter your Password
          </label>
        </div>
        {passwordError && (
          <div className="text-red-500 font-semibold">
            Please enter a valid Password
          </div>
        )}
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-purple-700 rounded-md text-white px-4 py-1 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordAuth;
