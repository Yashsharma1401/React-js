export const Contact =() =>{

    const handleFormSubmit = (FormData) => {
        const formInputData = object.fromEnteries(FormData.entries());
    };

    return (
    <section className="section-contact">
        <h2 className="container-title"> Contact Us</h2>
        <div className="contact-wrapper container">
            <form action={handleFormSubmit} className="">
                <input className="form-control" type="text" required autoComplete="false" placeholder="Enter Your Name" name="username"/> 
                <input className="" type="email" required autoComplete="false" placeholder="Enter Your Mail" name="email"/>
                <textarea className="form-control" rows="10" required autoComplete="false" placeholder="Enter Your Message" name="username"/> 
                <button type="submit" value="send"> send </button>
            </form>
        </div>
    </section> 
    );
};