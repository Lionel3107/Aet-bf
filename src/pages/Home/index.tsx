import React from "react";
import './style.css';
import Button from "../../components/Button";
import bannerBackgroundImage from '../../assets/images/banneerBackground.jpeg';
import HeadingWithBar from "../../components/HeadingWithBar";
import SimpleCard from "../../components/SimpleCard";

const Home: React.FC<any> = () => {

    const bannerStyles = {
        backgroundImage: `url(${bannerBackgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Adjust background image size (optional)
        backgroundPosition: '50% 20%', // Adjust background image position (optional)
        /* Add any other CSS styles you need for the container */
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.64)'
    };

    // const bannerStyles2 = {
    //     background: `linear-gradient(0deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url(${bannerBackgroundImage})`,
    //
    //     // backgroundImage: `url(${bannerBackgroundImage})`, // Set the background image
    //     backgroundSize: 'cover', // Adjust background image size (optional)
    //     backgroundPosition: 'center', // Adjust background image position (optional)
    //     /* Add any other CSS styles you need for the container */
    // };



    const posts = [
        {
            image: {
                src: 'https://s3-alpha-sig.figma.com/img/3fa3/3aae/aa80cc7fa87c137edccf2ca6e8a85b9e?Expires=1696809600&Signature=VuKg~MvLKQtrY-q6kxSzVnFUXPrCJ-zW8U0FogLZWv8lGHMF-ZbRt4J77buarEfpHRgQbdbFaPlQfSacvkT0btJBTNhys3~Bpg0zwAsh-XyQlC-AIQFlSIFQe1kG0F8CEsBpZ5NYH5oE7SU8sM2imYPnWg~NTlI~QvikcyPD-mAQ0NFR82w2pf627VGQC-ZO5fotmqL70qGmZO46sdGx3owmYO2qLup67829TfNUgG9mtOSPgJQ8gjOz3engYMFOUFW7XFkCaC3hTFc2PsINXeLtDush~XhL4lQtNc-JW9zcbhRO-EAAXRKyWFJwMeCDX7C3bhO2J5cvAmOrrXzMhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                alt: 'Post 1 Image',
            },
            text: `ow, I can see why people think this way. I don’t come from wealth either and even I have directed my irritation of elitism towards my more well-to-do classmates. Snobby attitudes aside, their lack of budget generally means high-quality design outcomes, and that puts them ahead of the competition in our very competitive world of design.
The gamers call it a “Pay-to-Win” system, and the design industry, or the entire world, works pretty much like that.
So why are we getting so emotional over the fact? And is formal education truly elitist, or just something we don’t like because most of us can’t attain it?`,
        },
        {
            image: {
                src: 'https://s3-alpha-sig.figma.com/img/76e3/e1bd/9832c718d52da49802c4d68264ac4f69?Expires=1696809600&Signature=HkTfFhKyk2b95IioskAHjb2uU0U99-XTo9SsQrm30t99DOmGuRcQi1Q1-92xV2s9mV39yaOgidaPkW08FqWzKVpqmjYHYvPWiI3syS7V-wu62LTIMbDm04LIy4zBo4DuB~Jzik6g8qyiNVBLQqnC8NshRur~8J3c~fuQpDPGurTUOPA9qTeGrm-eNXxSeNOex5DR8Gnc1RZWYd~CZ91i1-~TIpVeFIoMG0eWhhlzon7FstOhM9FnMwf1qXJZQHVpcj3BK9PGU95GwATczPNefZKNXCYo8024hbBRHJxQkScgBjOPL4cYg6HcBbc79-zlmSmoL~JHYw99AmX9yOu4zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                alt: 'Post 2 Image',
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        // Add more post previews here...
    ];

    return (
        <>
            <section className="banner" style={bannerStyles}>
                <div className="welcome-msg" style={{zIndex: "4"}}>
                    BIENVENUE SUR LE SITE WEB DES ANCIENS ENFANTS DE TROUPE DU BURKINA FASO
                </div>
                <div className="call-to-action" style={{zIndex: "4"}}>
                    <Button style={{
                        borderRadius: '50px',
                        border: '3px solid #FFF',
                        background: '#4169E1',
                        width: "25em",
                        height: "4em"
                    }} className={"call-to-action-button"}>
                        DÉCOUVRIR L’AMICALE
                    </Button>
                </div>
            </section>
            <section className="latest-news">
                <HeadingWithBar >
                    Dernières Actualités
                </HeadingWithBar>
                <div className="last-news-cards-container">
                    {posts.map((post, index) => (
                        <SimpleCard key={index} image={post.image} text={post.text} className={"last-news-card"}/>
                    ))}
                </div>
                <div className="button-more-container">
                    <Button style={{
                        borderRadius: '10px',
                        background: "#4169E1",
                        width:"20em",
                        height:'3em',
                    }}>
                        Voir tous les articles
                    </Button>
                </div>

            </section>
            <section className="about-amical">
                <HeadingWithBar >
                    A Propos de l’amicale
                </HeadingWithBar>
            </section>
        </>
    );
}

export default Home;
