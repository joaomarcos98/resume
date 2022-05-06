import * as S from "./styles"

export const Profile = () => {
    return (
        <S.Container>
            <S.ProfileImage src={"https://avatars.githubusercontent.com/u/72817686?v=4"} alt="Foto de uma pessoa" />
            <S.TextContent>
                <S.ProfileText>Sobre mim</S.ProfileText>
                <S.ProfileText>Interesses</S.ProfileText>
                <S.ProfileText>Habilidades</S.ProfileText>
                <S.ProfileText>Experiencias</S.ProfileText>
            </S.TextContent>
        </S.Container>
    )
}

