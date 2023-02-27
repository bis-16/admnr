import React, {FC} from "react";
import NavBar from "../NavBar/NavBar";

import s0 from "../../App.module.scss"
import s from "./PageWrapper.module.scss"


interface PageWrapperProps {
    loading?: boolean,
    // children: React.HTMLProps<any>,
    children: any,
}

const PageWrapper: FC<PageWrapperProps> = ({loading, children}) => {


    return (
        <div className={`${s0.wrapper} ${s0.wrapper__content}`}>
            {children}
        </div>
    )
}

export default PageWrapper