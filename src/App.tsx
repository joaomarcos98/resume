import { Profile } from "./components/profile"
import { GlobalStyles } from "./styles/global"

import * as S from "./app-styles"
import { Description } from "./components/about"

function App() {

    return (
        <S.Container>
            <GlobalStyles />
            <Profile />
            <Description />
        </S.Container>

    )
}

export default App
