import Avatar from '../../componets/Avatar'
import Paragrafo from '../../componets/Paragrafo'
import Titulo from '../../componets/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rogério Leal</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Rogerio-Leal
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
