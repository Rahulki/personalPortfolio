const Footer = () => {
    return (
        <footer class="d-flex flex-column align-items-center justify-content-center mt-5">
            <div class="social-links-wrapper">
                <a class="p-2 footer-icon" href="https://www.linkedin.com/in/rahul-odedara/">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Rahulki" class="p-2 footer-icon">
                    <i class="fab fa-github"></i>
                </a>
                <a href="tel:+12267501498" class="p-2 footer-icon">
                    <i class="fa fa-phone"></i>
                </a>
                <a href="mailto:rmodedara9@gmail.com" class="p-2 footer-icon">
                    <i class="fa fa-envelope"></i>
                </a>
            </div>
            <div class="caption">
                Copyright &copy 2024 Rahul Odedara. All rights reserved
            </div>
        </footer>
    )
}

export default Footer;