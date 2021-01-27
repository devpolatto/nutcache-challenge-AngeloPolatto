import { Container, Header } from './styles';
import EmployeeList from '../EmployeeList';

import Logo from "../../assets/nutcache-logo.png"

function Wrapper(){
    return(
        <Container>
            <Header>
                <img src={Logo} alt="Logo-Nutcache"/>
            </Header>
            <EmployeeList />
        </Container>
    )
}

export default Wrapper;