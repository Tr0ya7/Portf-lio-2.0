import SocialMediaButton from './socialMediaButton'

export default function SocialMedia({ className, width, height }) {
    return (
        <div className="flex">
            <SocialMediaButton
                href="https://www.linkedin.com/in/luiz-henrique-barros/"
                className={ className } 
                width={ width } 
                height={ height } 
                srcImage="/images/linkedin.png" 
                altImage="linkedin" 
            />
            <SocialMediaButton 
                href="https://github.com/Tr0ya7"
                className={ className } 
                width={ width } 
                height={ height } 
                srcImage="/images/github.png" 
                altImage="github" 
            />
            <SocialMediaButton 
                href="mailto:DevLuizHBarros@proton.me"
                className={ className } 
                width={ width } 
                height={ height } 
                srcImage="/images/e-mail.png" 
                altImage="e-mail" 
            />
        </div>
    )
}