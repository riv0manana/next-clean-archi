import { InputHTMLAttributes, ReactNode } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form";
import { Input as Inp } from '@/app/components/ui/input';
import { cn } from "@/app/lib/utils";
import { Control, FieldPath, FieldValues } from "react-hook-form";

type InputClass = {
    label?: string;
    container?: string;
    message?: string;
}

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
    start?: ReactNode;
    end?: ReactNode;
    children?: ReactNode;
    control: Control<T>;
    name: FieldPath<T>;
    label?: string;
    inputClass?: InputClass;
};

const Input = <T extends FieldValues>({
    control,
    start,
    end,
    children,
    name,
    label,
    type,
    inputClass,
    className,
    ...props
}: InputProps<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn({ 'hidden': type === 'hidden' }, inputClass?.message)}>
                    {label && <FormLabel className={cn(inputClass?.label)}>{label}</FormLabel>}
                    {children}
                    <FormControl>
                        <div className="relative">
                            {start}
                            <Inp {...props} {...field} className={cn({ "pl-10": !!start }, className)} />
                            {end}
                        </div>
                    </FormControl>
                    <FormMessage className={cn(inputClass?.message)} />
                </FormItem >
            )} />
    );
}

export default Input