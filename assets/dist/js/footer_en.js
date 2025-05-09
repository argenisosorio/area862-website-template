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
                                All rights reserved
                                <br>
                                Area 862 Graphics LLC
                            </small>
                        </div>
                    </div>
                    <div class="col-6 col-md">
                        <h5><b>Interest</b></h5>
                        <hr>
                        <ul class="list-unstyled text-small">
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="about_us.html">
                                    About us
                                </a>
                            </li>
                            <br>
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="privacy_policy.html">
                                    Privacy Policy
                                </a>
                            </li>
                            <br>
                            <li>
                                <a class="link-secondary text-decoration-none text-light" href="contact_us.html">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5><b>Support</b></h5>
                        <hr>
                        <ul class="list-unstyled text-small">
                            <li>
                                <i class="fa-solid fa-phone"></i> +1 214-709-7912
                            </li>
                            <br>
                            <li>
                                <i class="fa-solid fa-clock"></i> 8:00am - 8:00pm
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5><b>Social Networks</b></h5>
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