import { useCallback, useState } from "react";
import PasswordAuth from "./components/PasswordAuth";
import EmailAuth from "./components/EmailAuth";
import { validEmails } from "./dummyData";

function App() {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = useCallback((email: string) => {
    if (!validEmails.includes(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setIsEmailVerified(true);
  }, []);

  const validatePassword = useCallback((password: string) => {
    if (password.trim().length < 9) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
    console.log("User verified!!");
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[300px] self-center border-4 rounded-lg p-8 bg-red-200 ">
        {isEmailVerified ? (
          <PasswordAuth
            validatePassword={validatePassword}
            passwordError={passwordError}
            key="password"
          />
        ) : (
          <EmailAuth
            validateEmail={validateEmail}
            emailError={emailError}
            key="email"
          />
        )}
      </div>
    </div>
  );
}

export default App;
