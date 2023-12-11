import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral'
import ListaDeTarefas from '../../container/ListadeTarefa'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
