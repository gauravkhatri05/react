import { FC } from "react";

export const Main: FC = ({children: contents}) => (
    <main className="main container">{contents}</main>
);