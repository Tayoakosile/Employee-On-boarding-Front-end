"use client";

import useAuth from "@/hooks/useAuth";
import FormInput from "./FormInput";
import Button from "./reusables/Button";



interface AuthFormProps {
    type: "login" | "signup";
    user_type?: "admin" | "employee"
}

export function GeneralAuthForm({ type, user_type = "admin" }: AuthFormProps) {
    const { loginAdminControl, handleSubmitForm, loginOrRegisterMutation, registerAdminControl } = useAuth(type)

    const isTypeLogin = type === 'login'
    return (
        <form className="space-y-6" onSubmit={isTypeLogin ? loginAdminControl.handleSubmit(handleSubmitForm) : registerAdminControl.handleSubmit(handleSubmitForm)}>
            {type === "signup" && (
                <FormInput control={registerAdminControl.control} name="name" title="Full Name" />
            )}
            <FormInput control={isTypeLogin ? loginAdminControl.control : registerAdminControl.control} name="email" title="Email" />
            <FormInput control={isTypeLogin ? loginAdminControl.control : registerAdminControl.control} name="password" title="Password" />
            <Button loading={loginOrRegisterMutation.isPending}>
                {type === "signup" ? "Register" : "Login"}
            </Button>

            <p className="text-sm text-center text-gray-600">
                {type === "signup"
                    ? "Already have an account? "
                    : "Don’t have an account? "}
                <a
                    href={
                        type === "signup"
                            ? "/auth/employee/login"
                            : "/auth/employee/signup"
                    }
                    className="text-blue-700 font-semibold hover:underline"
                >
                    {type === "signup" ? "Login" : "Contact your admin"}
                </a>
            </p>

        </form>
    );

}