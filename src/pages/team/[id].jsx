import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";

import { getAllTeamIds, getTeamData } from "@library/team";

const TeamDetail = ( { postData, projects, services } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={postData.name} pageDesc={"Profissional Intelly"} />

      	{/* Onovo Team Detail */}
		<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">

				{/* Team Card */}
				<div className="onovo-team-detail">
					<div className="row gap-140 gap-top-60 gap-bottom-0">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<img loading="lazy" src={postData.image} className="team-detail-img" alt={postData.name} />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
							<h2>
								<span data-splitting data-onovo-scroll>{postData.name}</span>
							</h2>
							<h5>
								<span data-splitting data-onovo-scroll>{postData.role}</span>
							</h5>
							{typeof postData.info != "undefined" &&
							<div className="onovo-team-info">
								<ul>
									{postData.info.map((item, key) => (
									<li key={`info-item-${key}`}>
										<div className="title">
											<span data-splitting data-onovo-scroll>{item.label}</span>
										</div>
										<div className="onovo-text">
											<div data-splitting data-onovo-scroll>
												<p>{item.value}</p>
											</div>
										</div>
									</li>
									))}
								</ul>
							</div>
							}
							{typeof postData.social != "undefined" &&
							<div className="onovo-social-1 mb-5">
								<ul>
									{postData.social.map((item, key) => (
									<li key={`teamsocial-item-${key}`}>
										<a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
											<i aria-hidden="true" className={item.icon} />
										</a>
									</li>
									))}
								</ul>
							</div>
							}
						</div>
					</div>
				</div>
		
				{postData.contentHtml != "" &&
				<div className="onovo-text gap-top-140">
					<div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
				</div>
				}


			</div>
		</section>
	
		

		

      	

    </Layouts>
  );
};
export default TeamDetail;

export async function getStaticPaths() {
    const paths = getAllTeamIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getTeamData(params.id)
    
    return {
      props: {
        postData,
      }
    }
}