import SocialMediaButton from './socialMediaButton'
import socialMedia from './socialMedia.json'

export default function SocialMedia({ className, width, height }) {
    return (
        <div className="flex">
            {socialMedia.map(
                (social) => 
                    <SocialMediaButton 
                        href={social.link} 
                        className={ className } 
                        width={ width } 
                        height={ height } 
                        srcImage={social.image} 
                        altImage={social.name}
                    />
            )}
        </div>
    )
}