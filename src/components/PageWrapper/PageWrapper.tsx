import React, {FC} from "react";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";


interface PageWrapperProps {
    loading?: boolean,
    children: React.HTMLProps<any>,
}

const PageWrapper: FC<PageWrapperProps> = ({loading, children}) => {


    return (
        <>
            the PageWrapper
            {children}
        </>
    )
}

export default PageWrapper