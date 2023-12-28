import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const generatePassword = () => {
    const length = 12;
    const includeUppercase = true;
    const includeDigits = true;
    const includeSpecialChars = true;

    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeDigits) characters += "0123456789";
    if (includeSpecialChars) characters += "!@#$%^&*()_-+=<>?/{}[]";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4">
            <strong className="text-lg">Generated Password:</strong>
            <div className="mt-2 p-2 border border-gray-300 rounded">
              {password}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
