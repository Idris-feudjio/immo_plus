import { useState } from "react";
import LoginForm from "../components/LoginForm";
import InscriptionForm from "../components/InscriptionForm";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-1/3 p-10">
        <h1 className="text-4xl font-bold text-blue-950">Immo Plus</h1>
      </div>

      <div className="flex flex-col justify-center items-center w-2/3 bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-10">
          <div className="flex justify-center mb-8 gap-10 text-2xl font-bold text-blue-950">
            <button
              className={
                activeTab === "login"
                  ? "border-b-2 border-blue-950 pb-1"
                  : "text-gray-400"
              }
              onClick={() => setActiveTab("login")}
            >
              Se connecter
            </button>
            <button
              className={
                activeTab === "signup"
                  ? "border-b-2 border-blue-950 pb-1"
                  : "text-gray-400"
              }
              onClick={() => setActiveTab("signup")}
            >
              S'inscrire
            </button>
          </div>

          {activeTab === "login" ? <LoginForm /> : <InscriptionForm />}
        </div>
      </div>
    </div>
  );
}
