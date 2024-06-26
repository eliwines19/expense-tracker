import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/layouts';
import Orb from './Components/Orb/Orb.js';
import Navigation from './Components/Navigation/Navigation.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Expenses from './Components/Expenses/Expenses.js'
import Incomes from './Components/Incomes/Incomes.js'
import { useMemo, useState } from 'react';

const App = () => {

    const [active, setActive] = useState(1)
    const orbMemo = useMemo(() => {
        return <Orb />
    },[])

    const displayComponents = () => {
        switch(active){
            case 1:
                return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Incomes />
            case 4:
                return <Expenses />
            default:
                return <Dashboard />
        }
    }

    return(
        <AppStyled bg={bg} className="App">
            {orbMemo}
            <MainLayout className='main-layout'>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayComponents()}
                </main>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`

export default App