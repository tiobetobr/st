import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";

import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = videoIframe?.dataset.src;
    videoIframe?.setAttribute('src', videoUrl);
  }

  return (
    <Layouts>
    	<PageBanner pageTitle={"Sobre nós"} pageDesc={"Conheça a história da Intelly Soluções"} />
      
      	{/* Onovo About */}
	  	<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span> Sua busca termina aqui...  </span>
							</div>
							<h2 className="onovo-title-2">
								<span> Ei, que maravilha que <br/>você nos encontrou! <br/>Vamos avançar juntos? </span>
							</h2>
							<div className="onovo-text">
								<p>Crescemos desde o início pois  <strong>nossos clientes também crescem!</strong> Com larga experiência, estamos prontos para lhe atender da melhor maneira posível, oferecendo as melhores condições para o melhor custo benefício! </p>
							</div>
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						<img src="/images/onovo-about-logo.png" alt="" />

					</div>
				</div>

				

				

				{/* Description */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Profissionalismo</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
						Equipe jovem, somos comprometidos e apaixonados pelo que fazemos! Todos nós, profissionais, possuímos múltiplas habilidades tecnológicas e executamos com exímio responsabilidade nossos rigorosos processos de qualidade em nossos serviços. Em tudo o que fazemos há reflexos de nossa gratidão pela tragetória e expectativa para avançarmos ao futuro junto com nossos clientes! 
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-60">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Abrangência</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
						Atendemos todo Brasil. Temos clientes em cada um dos estados brasileiros. Dispomos de uma equipe de atendimento e suporte 24 horas para nossos clientes. Uma grande rede de parceiros profissionais que atuam como nossos braços frente à diversas atividades, prontos para lhe atender onde quer que você esteja!
					</div>
				</div>

				

			</div>
		</section>

	

	

      	<HistorySlider />

      	

      	<Testimonial2Slider />

      	
      
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();

  return {
    props: {
      team: allTeam,
    }
  }
}