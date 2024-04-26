import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';

const Contact = () => {
  const faqData = {
    "title": "Dúvidas comuns",
    "subtitle": "Resolver seus problemas <br>é o nosso negócio",
    "items": [
        {
            "title": "Como solicito um orçamento?",
            "text": "Muito simples! Mande-nos uma mensagem, informe seu telefone e email de contato para retorno. Faremos um contato inicial para obter todos os detalhes de sua necessidade e se for necessário podemos realizar uma video conferência para lhe ouvir e entender melhor. Em seguida lhe comunicaremos do prazo necessário para montarmos seu orçamento (geralmente 1 dia útil). Por final seu orçamento será encaminhado para seus contatos."
        },
        {
            "title": "É possível obter suporte permanente?",
            "text": "Sim, perfeitamente! Podemos adicionar um contrato de suporte para qualquer um dos nossos produtos e serviços. Oferecemos diversos níveis de atendimento e especialidades que são cobertas por nossos contratos de suporte."
        },
        {
            "title": "Quais os horários de atendimento?",
            "text": "O atendimento ao público é das 08:00hrs às 18:00hrs de segunda-feira à sexta-feira (horário de Brasília-DF BRT e horário de Toronto-ON GMT-5 / sem intervalos para almoço). Poderá haver atendimentos de suporte 24/7 (plantão) para contratantes."
        },
        {
            "title": "Sou contratante, como abro um chamado de atendimento?",
            "text": "No topo de nosso site, há um botão chamado <strong>Abrir chamado</strong>. Este botão te levará para nosso sistema de chamados. Nele você poderá detalhar seu problema e/ou necessidade, acompanhar o status de conclusão, prazos e demais detalhes sobre este chamado. Se você ainda não possui cadastro em nosso sistema, basta clicar em <strong>cadastrar-me</strong>. Você será notificado em seu WhatsApp e email em cada movimentação do status de seu chamado. <p><br/><a href= https://www.youtube.com/watch?v=DrZWpNmED4k/><strong>Clique aqui para aprender à utilizar o sistema de chamados</strong></a></p> "
        },
        {
            "title": "Qual abrangência de atendimento?",
            "text": "Podemos lhe atender <strong>onde você estiver</strong>, em qualquer lugar do mundo! Nossos serviços atendem aos requisitos internacionais de desenvolvimento, segurança e atendimento. Trabalhamos com tecnologias e soluções globais. Dispomos de uma sede (matriz) no <strong>Brasil</strong>, localizada no centro-oeste do país, sendo capaz de atender à toda nação em todos os serviços prestados. Para o restante do mundo temos um escritório (filial) no <strong>Canadá</strong>, em Toronto, com atendimento em inglês."
        },
        {
            "title": "Quais procedimentos para o Acesso Remoto?",
            "text": "Para obter um atendimento ou suporte via <strong>Acesso Remoto</strong> realize primeiramente o download da aplicação de acesso. Você poderá baixa-la clicando no link abaixo: <p><br/><a href= https://anydesk.com/pt/downloads/><strong>Clique aqui para baixar o software de acesso remoto</strong></a></p> <br/> Após a conclusão do download e instalação do software você não precisará baixa-lo e instala-lo novamente em outros acessos remotos. O software irá gerar um ID de acesso exclusivo de seu computador, e para que o acesso ocorra você será sempre requisitado à autoriza-lo previamente."
        }
    ]
  }

  return (
    <Layouts>
        <PageBanner pageTitle={"Fale conosco"} pageDesc={"Tem ideias para o seu negócio? Vamos construir algo incrível juntos."} />

        {/* Onovo Contact Info */}
        <section className="onovo-section gap-top-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="onovo-text gap-bottom-40">
                            <h4>Envie uma mensagem</h4>
                            Respondemos no mesmo dia! Fale mais sobre sua necessidade.
                        </div>

                        {/* Form */}
                        <div className="onovo-form">
                        <Formik
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit = {( values, { setSubmitting } ) => {
                                const form = document.getElementById("contactForm");
                                const status = document.getElementById("contactFormStatus");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.ok) {
                                        status.innerHTML = "Obrigado pelo contato! Responderemos em breve";
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            if (Object.hasOwn(data, 'errors')) {
                                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                            } else {
                                                status.innerHTML = "Oops! There was a problem submitting your form"
                                            }
                                        })
                                    }
                                }).catch(error => {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                });

                                setSubmitting(false);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="cform" method="post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Nome" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Telefone com DDD" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Messagem" 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>Enviar mensagem</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                                <div className="form-status alert-success" id="contactFormStatus" />
                            </form>
                            )}
                            </Formik>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="onovo-contact-info onovo-text-white">
                            <ul>
                                <li>
                                    <h5>Outros canais:</h5>
                                    <a href="https://api.whatsapp.com/send?l=pt&phone=5564981451795" className="onovo-lnk lnk--white" target="_blank">+55 64 98145-1795</a><br/>
                                    <a href="mailto:contato@intellysolucoes.com" className="onovo-lnk lnk--white" target="_blank">contato@intellysolucoes.com</a>
                                    
                                    <div className="onovo-social-1 onovo-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {appData.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="onovo-social-link onovo-hover-2" title={item.title}>
                                                    <i className={`icon ${item.icon}`} />
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <h5>Brasil</h5>
                                    <div>Av. Ricardo Paranhos, nº 1157 <br/>Margon, Catalão/GO</div>
                                </li>
                                <li>
                                    <h5>Canadá</h5>
                                    <div>900 Alness St #204, North York <br/>ON M3J 2H6, Toronto</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Onovo Faq */}
        <section className="onovo-section gap-top-140">
            <div className="container">

                {/* Heading */}
                <div className="onovo-heading align-center gap-bottom-40">
                    <div className="onovo-subtitle-1">
                        <span>{faqData.title}</span>
                    </div>
                    <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{ __html: faqData.subtitle }} />
                    </h2>
                </div>

                {/* Faq items */}
                <div className="onovo-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    {faqData.items.map((item, key) => (
                    <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                    <div key={`faq-item-${key}`} className="onovo-faq-item onovo-collapse-item">
                        <Accordion.Header>
                        <h5 className="title onovo-collapse-btn">
                            <span>{item.title}</span>
                            <i className="arrow" />
                        </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="onovo-text">
                            <div dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        </Accordion.Body>
                    </div>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div>
                
            </div>
        </section>
      
    </Layouts>
  );
};
export default Contact;
