// ASSETS
import instaLogo from "../../assets/instagram.png"
import linkedInLogo from "../../assets/linkedin.png"
import twitterLogo from "../../assets/twitter.png"

// FRAMER

const Footer = () => {

    const logoImgArr = [

        {
            id: 1,
            src: instaLogo,
            alt: "social logo"

        },

        {
            id: 2,
            src: twitterLogo,
            alt: "social logo"

        },

        {
            id: 3,
            src: linkedInLogo,
            alt: "social logo"

        }
    ]

    return (
        <footer
            className='footer fixed p-3 z-10 bottom-0 left-10 border-white rounded-xl'
        >
            <div className='flex flex-col mb-8'>
                {logoImgArr.map((imgs) => (
                    <img 
                        src={imgs.src}
                        alt={imgs.alt}
                        key={imgs.id}
                        className='h-8 w-8 my-3 hover:scale-110'
                    />
                ))}
            </div>
        </footer>
    )
}

export default Footer