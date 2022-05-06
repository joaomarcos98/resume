import { Profile } from "./components/profile"
import { GlobalStyles } from "./styles/global"

import * as S from "./app-styles"

function App() {

    return (
        <S.Container>
            <GlobalStyles />
            <Profile />
            <h1>Hello world</h1>
        </S.Container>

    )
}

export default App
