import React from "react";
import { Container } from "./style";

const Theme = ({ theme, themeFunction }) => (
    <Container onClick={themeFunction}>
        <div />
        <span>{theme.text}</span>
    </Container>
);

export default Theme;
