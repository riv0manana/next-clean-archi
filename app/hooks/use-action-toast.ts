'use client'

import { useToast } from "@/app/hooks/use-toast";

type ToastMsg = {
    title: string;
    description?: string;
    errorTitle: string;
    errorDescription?: string;
}

const useActionToast = () => {
    const { toast } = useToast();

    const runToast = <T>(
        [error, response]: ActionResponse<T>,
        msg: ToastMsg,
        onSuccessCb?: () => void
    ) => {
        if (error) {
            toast({
                title: msg.errorTitle,
                description: msg.errorDescription,
                variant: 'destructive'
            });
        }
        if (response) {
            toast({
                title: msg.title,
                description: msg.description
            })
            onSuccessCb?.();
        }
    }

    return runToast;
}

export default useActionToast