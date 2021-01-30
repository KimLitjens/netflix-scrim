import React from 'react'
import { Container, Image, Item, Inner, Title, SubTitle, Pane } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
    return <Image {...restProps} />
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.SubTitle = function JumbotronSubtitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

