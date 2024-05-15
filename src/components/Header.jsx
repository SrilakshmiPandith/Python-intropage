import  pythonLogo from '../assets/python-logo.jpg';

export default function Header(){
    return(
        <div id="header">
            <img src={pythonLogo} alt="python-logo" className='logo' />
            <h1>Python</h1>
            <p>Python: Easy as Breeze, Learn with Ease!</p>
        </div>
    );

}