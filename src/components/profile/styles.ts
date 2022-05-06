import styled from "styled-components"


export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.purple};
    height: 100%;
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15rem;
`;

export const ProfileImage = styled.img`
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
`;

export const TextContent = styled.section`
margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

export const ProfileText = styled.h3`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 2rem;
    line-height: 3rem;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        text-underline-offset: 0.325rem;
    }
`;