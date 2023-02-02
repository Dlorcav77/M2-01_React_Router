export default function Contact() {
    return(
        <>
            <div className="container w-50 pt-5">
                <h2 className="text-center mb-5">Cuentanos, en que te podemos ayudar?</h2>
                <div className="container bg-success px-2 py-3">
                    <form action="">
                        <p className="h4">Correo</p>
                        <input type="text" size="70"/>
                        <p className="h4">Descripcion</p>
                        <textarea name="descripcion" id="" cols="73" rows="5"></textarea>
                    </form>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mt-3 ">Enviar</button>
                </div>
            </div>

        </>
    )
};
