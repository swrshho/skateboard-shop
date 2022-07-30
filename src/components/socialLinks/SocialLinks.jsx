import SocialBTN from '../socialBTN/SocialBTN'
import { socialLinksData } from './data'

const SocialLinks = ({ className }) => {
	return (
		<div
			className={`${className} w-full max-w-215px flex justify-between items-center`}>
			{socialLinksData.map((socialLink, idx) => (
				<SocialBTN icon={socialLink.icon} path={socialLink.link} key={idx} />
			))}
		</div>
	)
}

export default SocialLinks
