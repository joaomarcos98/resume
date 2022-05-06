
import * as S from "./styles";

export const Description = () => {
    return (
        <S.Container>
            <S.Name>João Marcos P. Belanga</S.Name>
            <S.Email>joomarcos.belanga98@gmail.com</S.Email>

            <S.Content>
                <S.AboutMe>
                    Sou desenvolvedor
                    <S.Tag color="yellow" >JavaScript</S.Tag> e
                    <S.Tag color="blue" >Typescript</S.Tag>
                    <S.Emoji>👋🏻</S.Emoji>
                </S.AboutMe>
            </S.Content>
        </S.Container>
    )
}

