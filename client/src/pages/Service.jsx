import { useAuth } from "../store/Auth"
export const Service = () => {
    const {services} = useAuth();
    return (
        <section className="section-services">
            <div className="container">
                <div className="container grid grid-three-cols">
                    {
                        services.map((curElem , index)=> {
                            const {price , description , provider , service} = curElem;
                            return (
                                <div className="card" key={index}>
                                    <div className="card-img">
                                        <img src="/images/design.png" alt="services images" width="200"/>
                                    </div>
                                    <div className="card-details">
                                        <div className="grid grid-two-cols">
                                            <p>{provider}</p>
                                            <p>{price}</p>
                                        </div>
                                        <h2>{service}</h2>
                                        <p>{description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )

} 