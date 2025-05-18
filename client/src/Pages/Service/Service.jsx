import { useAuth } from '../../store/auth'
import './Service.css'


const Service = () => {

    const { service } = useAuth();

    if (!Array.isArray(service)) {
        return <p>Loading or no services available.</p>;
    }

    return (
        <>
            <div className='service-main'>

                {service.map((currEle, index) => {

                    const { title, description, image } = currEle;

                    return (
                        <div class="card" key={index}>
                            <img src={image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{ title }</h5>
                                <p class="card-text">{ description }</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })}



            </div>
        </>
    )
}
export default Service