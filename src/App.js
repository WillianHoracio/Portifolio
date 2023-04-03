import './App.css'
import './styles/projetos.css'
import './styles/scroll.css'
import './styles/conhecimentos.css'
import './styles/certificados.css'
import './styles/contato.css'
import Card from './components/Card'
import reactLogo from './images/react-logo.png'
import jsLogo from './images/js-logo.png'
import cssLogo from './images/css-logo.png'
import htmlLogo from './images/html-logo.png'
import ratLogo from './images/rat.png'
import Title from './components/Title'
import personIcon from './images/person-icon.png'
import personPlusIcon from './images/person-plus-icon.png'
import dragon from './images/dragon.png'
import tresCamaras from './images/tres-camaras.png'
import cruzElevada from './images/cruz-elevada.png'
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail, AiOutlineGithub} from 'react-icons/ai'

function App() {

  const cardConhecimento = [
    {
      title: "React",
      active: true,
      image: reactLogo,
      column: 1,
      itens: [
        "Componentização",
        "JSX",
        "Props Drilling",
        "Hooks",
        "Estados",
        "Ciclo de Vida"]
    },
    {
      title: "JavaScript",
      active: false,
      image: jsLogo,
      column: 1,
      itens: [
        "Váriaveis",
        "Operadores Lógicos",
        "Condicionais",
        "Laços de Repetição",
        "Funções",
        "Eventos",
        "Classes e Objetos",
        "Manipulação de DOM",
      ]  
    },
    {
      title: "CSS-3",
      active: true,
      image: cssLogo,
      column: 2,
      itens: [
        "Seletores",
        "Propriedades",
        "Flex Box",
        "Grid",
        "Responsividade",
        "Animações"
      ]  
    },
    {
      title: "HTML-5",
      active: false,
      image: htmlLogo,
      column: 1,
      itens: [
        "Estrutura",
        "Tags",
        "Atributos",
        "Listas",
        "Tabelas",
        "Formulários"
      ]  
    },
    {
      title: "Relevantes",
      active: false,
      image: personIcon,
      column: 2,
      itens: [
        "POO",
        "Linguagem SQL",
        "Conhecimentos de Back-End",
        "Arquitetura MVC",
        "Git",
        "Leitura e Escrita em Inglês",
        "Rápido aprendizado",
        "Lógica de programação sólida",
        "Boas Práticas",
        "Autonomia"
      ]  
    },
    {
      title: "Extras",
      active: false,
      image: personPlusIcon,
      column: 2,
      itens: [
        "Php",
        "Delphi",
        "Java",
        "Python",
        "C++"
      ]  
    }

  ]

  return (
     <div className="App">
      <header>  
        <div className='first-scroll'>
          <div className='scroll__start'/>
          <div className='scroll__body'/>
          <div className='scroll__end'/>
        </div>

        <div className="left-border"/>
        <div className="right-border"/>
      </header>
      <main className='main-box'>
    
 
        <div className='container__title'>
          <Title title="Apresentação" imageOn={false}/>
        </div>

        <section className='sobre container'>
          
          <div className='text-field'>
            <label><p>Olá, me chamo</p><h1>Willian dos Santos Horacio</h1><br/><p>Sou técnico de informática e biólogo com atuação no meio científico,
              com contribuições em pesquisas relacionadas a transtornos do
              neuro desenvolvimento. </p><p>Possuo experiência em automatização de
              testes comportamentais, tendo desenvolvido softwares para esta
              finalidade. Atualmente estou em transição de carreira para
              desenvolvedor Front-end, buscando minha primeira oportunidade de emprego.</p>
            </label>
          </div>
          <img src={dragon}/>
        </section>
        <div className='container__title'>
          <Title title="Habilidades" imagem={true}/>
        </div>
        <section className="habilidades container">
        
        <div className='text-field'>
            <label><p>Minhas habilidades foram desenvolvidas durante o Curso Técnico de Informática realizado na SATC, variados cursos na plataforma Alura, dois estágios realizados como 
              programador back-end, mais de 5 anos programando por hobbie e utilizando meus conhecimentos para atender demandas observadas enquanto atuando em outras áreas.
            </p>
            </label>
          </div>
          <div className='conhecimentos__column'>
            {cardConhecimento.filter(item => item.column === 1).map(item => (
              <Card key={item.title} title={item.title} image={item.image} itemList={item.itens} column={1} active={item.active}/>
            ))}
          </div>
          <div className='conhecimentos__column'> 
            {cardConhecimento.filter(item => item.column === 2).map(item => (
              <Card key={item.title} title={item.title} image={item.image} itemList={item.itens} column={2} active={item.active}/>
            ))}
          </div>

         
        </section>
        
        <div className='container__title' >
            <Title title="Projetos" imagem={true}/>
        </div>

        <section className='projetos container'>
          

          <div className='projeto'>
            <div className='subtitulo'>
              <label>Projeto Ratos</label>
            </div>
            <div className='projeto__sobre'>
              <label><p>Software desktop desenvolvido utilizando a plataforma Delphi, e projetado para automatizar a contabilização de cronômetros e contadores em testes comportamentais com ratos. </p>
              </label>
            </div>
            
              <img src={tresCamaras} className='projeto__img'/>
              <div className='projeto__sobre'>
              <label>
                <p>Utilizado atualmente no laboratório <a href="https://www.instagram.com/land.unesc/">LAND UNESC</a>, gerando grande impacto por meio da redução de cerca de 66% da mão de 
                obra necessária para a execução dos testes.</p>
              </label>
            </div>
            

           <img src={cruzElevada} className='projeto__img'/>
      
          </div>

          <div className='projeto'>
            <div className='subtitulo'>
             <label>Lab-Planner</label>
            </div>
            <div className='projeto__sobre'>
              <label><p>Uma plataforma para gerenciamento de laboratórios de pesquisa que utilizam testes com animais. Também terá os testes disponíveis no projeto anterior, convertidos para JavaScript, e otimizado para execução de testes utilizando apenas o celular.</p>
                <p>Além disso, contará com uma série de funcionalidades para gerenciamento dos resultados, mural de organização, calendário, e inclusão de novos testes no futuro.</p>
              </label>
            </div>
            <div className='projeto__lab-planner'>
              <a href="https://lab-planner.vercel.app/"><img src={ratLogo}/></a>
              <label>LAB PLANNER</label>
            </div>
            <div className='projeto__sobre'>
              <label>
                <p>A plataforma está em estágios iniciais de desenvolvimento, e está sendo contruida utilizando a biblioteca React. Você pode acompanhar o desenvolimento atravez do <a href="https://lab-planner.vercel.app/">LAB PLANNER</a>. </p>
              </label>
            </div>
            
          </div>
        </section>
        <div className='container__title'>
          <Title title="Certificados" imagem={true}/>
        </div>   
        <section className='certificados container'>
          <div className='certificado'>
              <label>Curso Técnico de Informática - Código de autenticação SISTEC: <a href="https://sistec.mec.gov.br/validadenacional">65143/61029968CM</a></label>
          </div>
          <div className='certificado'>
              <label>
                <a href="https://cursos.alura.com.br/user/williansh6e/fullCertificate/932739472bc417042e66f68b8d80bd5a">
                  Certificado Geral Alura
                </a>
              </label>
          </div>
        </section>
        <div className='container__title'>
          <Title title="Contato" imagem={true}/>
        </div>
        <section className='contato container'>
              <div className='contato__item'>
                <AiOutlineLinkedin size={70}/>
                <a href="https://www.linkedin.com/in/willianhoracio/">WillianHoracio</a>
              </div>
              <div className='contato__item'>
                <AiOutlineGithub size={70}/>
                <a href="https://github.com/WillianHoracio">WillianHoracio</a>
              </div>
              <div className='contato__item'>
                <AiOutlineInstagram size={70}/>
                <a href="https://www.instagram.com/willian_sanh/">willian_sanh</a>
              </div>
              <div className='contato__item'>
                <AiOutlineMail size={70}/>
                <label>williansh6e@hotmail.com</label>
              </div>
        </section>
      </main>   
      <footer>
        <div className='final-scroll'>
          <div className='scroll__start'/>
          <div className='scroll__body'/>
          <div className='scroll__end'/>
        </div> 
      </footer>
           
    </div>
  );
}

export default App;
