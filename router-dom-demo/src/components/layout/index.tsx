import { Footer, Header, Main } from "components/sections";
import { FC } from "react";

export const Layout: FC = ({children: contents}) => (
    <>
        <Header />
        <Main>{contents}</Main>
        <Footer />
    </>
);
