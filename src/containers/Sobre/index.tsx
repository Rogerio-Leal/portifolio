import Titulo from '../../componets/Titulo'
import Paragrafo from '../../componets/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      loren ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
      lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
      nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam
      eget libero egestas mattis sit amet vitae augue.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Rogerio-Leal&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rogerio-Leal&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
