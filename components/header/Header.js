class Header {
    constructor() {
        console.log('inicijuotas Header construktorius');
    }

    render() {
        return `<header>
                    <img src="#" alt="Logotipas">
                    <nav>
                        <a href="./">Home</a>
                        <a href="./about">About</a>
                        <a href="./404">404</a>
                    </nav>
                </header>`;
    }
}

export { Header };
