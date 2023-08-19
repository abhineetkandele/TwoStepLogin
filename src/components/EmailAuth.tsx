import { useRef } from "react";

const EmailAuth = ({ validateEmail, emailError }) => {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail && validateEmail(emailRef.current.value);
  };

  return (
    <div>
      <form>
        <div>
          <input
            placeholder=" "
            ref={emailRef}
            type="email"
            required
            id="email"
            className="p-1 pt-4 border-2 rounded-md border-purple-500 w-[200px] peer"
          />
          <label
            htmlFor="email"
            className="absolute text-sm duration-300 transform ml-[-205px] scale-75 text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-black peer-placeholder-shown:translate-y-3 peer-placeholder-shown:translate-x-3 peer-focus:-translate-x-0 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-purple-500"
          >
            Enter your Email
          </label>
        </div>
        {emailError && (
          <div className="text-red-500 font-semibold">
            Please enter a valid Email !
          </div>
        )}
        <button
          className="bg-purple-700 rounded-md text-white px-4 py-1 mt-4"
          onClick={handleSubmit}
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default EmailAuth;
