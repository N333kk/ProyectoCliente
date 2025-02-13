import { ReactNode } from "react";

export default function MainPanel( {children} : {children: ReactNode} ) {
    
    return (
        <div className="bg-paynes_gray-600 dark:bg-onyx-400 border-paynes_gray-300 col-start-3 col-end-10 row-start-1 row-end-8 rounded-md flex justify-center items-center">
            {children}
          </div>
    )
}