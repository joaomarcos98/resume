import styled, { keyframes } from "styled-components";


type TagProps = {
    color: "blue" | "yellow"
}

export const Container = styled.section`

    height: 100vh;
    width: 100%;
    padding: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.h1`
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.black};
`;

export const Email = styled.h3`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        text-underline-offset: 0.5rem;
    }

`;

export const Content = styled.div`
    margin-top: 5rem;
`;

export const AboutMe = styled.span`
    font-size: 2rem;
`;

// colocar animação
export const Tag = styled.span<TagProps>`
    color: ${({ theme, color }) =>
        color === "blue" ? theme.colors.blue : theme.colors.yellow
    };
`;

export const Emoji = styled.span`
    margin-left: 1rem;
`;


