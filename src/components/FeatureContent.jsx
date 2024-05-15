export default function FeatureContent({title, image, description}){
    return(
        <section id="feature-content">
            <img src={image} alt='`${title} image`'/>
            <p>{description}</p>
        </section>
    );
}