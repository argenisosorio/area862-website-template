document.addEventListener("DOMContentLoaded", function () {
    const footer = `
        <footer class="py-5 footer text-light section-6">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md">
                        <div class="text-center">
                            <img
                                src="assets/img/favicon.png"
                                alt="image"
                                width="150"
                                class="d-inline-block align-text-top img-zoom"
                            >
                            <small class="d-block mb-3 mt-3 text-body-secondary">
                                Todos los derechos reservados
                                <br>
                                Area 862 Graphics LLC
                            </small>
                        </div>
                    </div>
                    <div class="col-6 col-md">
                        <h5><b>Interés</b></h5>
                        <hr>
                        <ul class="list-unstyled text-small">
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="sobre_nosotros.html">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <br>
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="politica_privacidad.html">
                                    Política de Privacidad
                                </a>
                            </li>
                            <br>
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="contactanos.html">
                                    Contáctanos
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5><b>Contáctanos</b></h5>
                        <hr>
                        <ul class="list-unstyled text-small">
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                742 Creekstone Ct, Cedar Hill TX 75104
                            </li>
                            <br>
                            <li>
                                <i class="fa-solid fa-phone"></i> +1 214-709-7912
                            </li>
                            <br>
                            <li>
                                <i class="fa-solid fa-envelope"></i> orders@area862graphics.net
                            </li>
                            <br>
                            <li>
                                <i class="fa-solid fa-clock"></i> 8:00am - 8:00pm
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5><b>Redes Sociales</b></h5>
                        <hr>
                        <ul class="list-unstyled text-small">
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="https://www.facebook.com/profile.php?id=100083277285710">
                                    <i class="fa-brands fa-facebook"></i> Area 862 Graphics LLC
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
});