import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";
// import Input from "../form/input/InputField";

import Input from "./Input";
import Label from "./Label";


type FormInputType = {
    control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    name: string;
    id?: string;
    title?: string;
    isDark?: boolean;
    disabled?: boolean;
    isImportant?: boolean;
    placeholder?: string;
    className?: string;
    hint?: string;
    type?: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
};
const FormInput = ({
    control,
    type = "text",
    name,
    autoComplete, className,
    placeholder,
    isImportant,
    hint,
    id,
    title,
    disabled

}: FormInputType) => {
    return (
        <Controller
            control={control}
            render={({
                field: { onChange, onBlur, value, },
                fieldState: { error, invalid, },

            }) => {


                return <div className=" w-full">
                    {title && (
                        <Label
                            htmlFor={id ?? name}
                        >
                            {title}
                            {isImportant && <span className="text-red-500">*</span>}
                        </Label>
                    )}
                    <Input
                        value={value}
                        className={className}
                        type={type}
                        hint={hint}
                        invalid={invalid}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        onChange={(e) => {
                            onChange(e);
                        }}
                        onBlur={onBlur}
                        id={id ?? name}
                    />
                    {invalid && (
                        <div className="mt-2  text-red-600 text-xs font-medium !mb-2   ">
                            {error?.message}
                        </div>
                    )}
                </div>
            }}
            name={name}
        />
    );
};

export default FormInput;
