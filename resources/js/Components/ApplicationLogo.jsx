import logo from '../../../public/img/amana.jpg'; // Correct path


export default function ApplicationLogo({ className }) {
    return (
        <img
            src={logo}
            alt="Your Logo"
            className={`${className} h-16 w-auto`}
        />
    );
}