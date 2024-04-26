import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";

const FAQ = () => {
  const Content = {
    "items": [
      {
        "heading": "Quais procedimentos para o Acesso Remoto?",
        "content": "Para obter um atendimento ou suporte via <strong>Acesso Remoto</strong> realize primeiramente o download da aplicação de acesso. Você poderá baixa-la clicando no link abaixo: <p><br/><a href= https://anydesk.com/pt/downloads/><strong>Clique aqui para baixar o software de acesso remoto</strong></a></p> <br/> Após a conclusão do download e instalação do software você não precisará baixa-lo e instala-lo novamente em outros acessos remotos. O software irá gerar um ID de acesso exclusivo de seu computador, e para que o acesso ocorra você será sempre requisitado à autoriza-lo previamente."
      },
      {
        "heading": "Sou contratante, como abro um chamado de atendimento?",
        "content": "No topo de nosso site, há um botão chamado <strong>Abrir chamado</strong>. Este botão te levará para nosso sistema de chamados. Nele você poderá detalhar seu problema e/ou necessidade, acompanhar o status de conclusão, prazos e demais detalhes sobre este chamado. Se você ainda não possui cadastro em nosso sistema, basta clicar em <strong>cadastrar-me</strong>. Você será notificado em seu WhatsApp e email em cada movimentação do status de seu chamado.<p><br/><a href= https://www.youtube.com/watch?v=DrZWpNmED4k/><strong>Clique aqui para aprender à utilizar o sistema de chamados</strong></a></p> "
      },
      {
        "heading": "Quais os horários de atendimento?",
        "content": "O atendimento ao público é das 08:00hrs às 18:00hrs de segunda-feira à sexta-feira (horário de Brasília-DF BRT e horário de Toronto-ON GMT-5 / sem intervalos para almoço). Poderá haver atendimentos de suporte 24/7 (plantão) para contratantes."
      },
      {
        "heading": "Como solicito um orçamento?",
        "content": "Muito simples! Mande-nos uma mensagem, informe seu telefone e email de contato para retorno. Faremos um contato inicial para obter todos os detalhes de sua necessidade e se for necessário podemos realizar uma video conferência para lhe ouvir e entender melhor. Em seguida lhe comunicaremos do prazo necessário para montarmos seu orçamento (geralmente 1 dia útil). Por final seu orçamento será encaminhado para seus contatos."
      },
      {
        "heading": "Qual abrangência de atendimento?",
        "content": "Podemos lhe atender <strong>onde você estiver</strong>, em qualquer lugar do mundo! Nossos serviços atendem aos requisitos internacionais de desenvolvimento, segurança e atendimento. Trabalhamos com tecnologias e soluções globais. Dispomos de uma sede (matriz) no <strong>Brasil</strong>, localizada no centro-oeste do país, sendo capaz de atender à toda nação em todos os serviços prestados. Para o restante do mundo temos um escritório (filial) no <strong>Canadá</strong>, em Toronto, com atendimento em inglês."
      },
      {
        "heading": "É possível obter suporte permanente?",
        "content": "Sim, perfeitamente! Podemos adicionar um contrato de suporte para qualquer um dos nossos produtos e serviços. Oferecemos diversos níveis de atendimento e especialidades que são cobertas por nossos contratos de suporte."
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Dúvidas Frequentes"} pageDesc={"Perguntas e respostas direto ao ponto."} />
      
      {/* Onovo Faq */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

          {/* Faq items */}
          <Accordion>
          <div className="onovo-faq-items">
            {Content.items.map((item, key) => (
            <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
            <div className="onovo-faq-item onovo-collapse-item">
              <Accordion.Header>
              <h5 className="title onovo-collapse-btn">
                <span>{item.heading}</span>
                <i className="arrow" />
              </h5>
              </Accordion.Header>
              <Accordion.Body>
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : item.content}} />
                </div>
              </Accordion.Body>
            </div>
            </Accordion.Item>
            ))}
          </div>
          </Accordion>

        </div>
			</section>

    

      

    </Layouts>
  );
};
export default FAQ;