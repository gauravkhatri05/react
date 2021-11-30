import { FC } from "react";

export const Main: FC = ({children: contents}) => (
    <main className="main container d-flex justify-content-center align-items-center">{contents}</main>
);
