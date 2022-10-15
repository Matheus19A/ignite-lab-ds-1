import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild}: ButtonProps){

    const Comp = asChild ? Slot : 'button';

    return(
        <Comp 
            className={clsx(
                "py-4 px-3 bg-cyan-500 rounded font-semibold text-black-900 text-sm w-full hover:bg-cyan-600",
            )}
        >
            {children}
        </Comp>
    )
}