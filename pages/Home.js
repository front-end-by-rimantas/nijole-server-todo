function PageHome() {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>TODO</title>
                <link rel="stylesheet" href="./css/home.css">
            </head>
            <body>
                <header class="header">
                    <img class="logo" src="./img/logo.png" alt="TODO logo">
                    <nav class="menu">
                        <a class="link" href="#">Register</a>
                        <a class="link" href="#">Login</a>
                    </nav>
                </header>
                <main class="content">
                    <img class="hero-img" src="./img/undraw_content_team_3epn.svg" alt="Main hero image">
                    <div class="hero-text">
                        <h1 class="main-title">TODO</h1>
                        <p class="main-description">This is the first and the last app you will ever need or want for your task management! 🎅🚀</p>
                        <a class="btn" href="#">Register</a>
                    </div>
                </main>
            </body>
            </html>`;
}

export { PageHome };
