// Generate HTML Page Template Code
// Create Employee Role Cards
// Manager Card:
const createManagerCard = function (Manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 text-center">
            <div class="card-header">
                <h2>${Manager.name}</h2>
                <h4><i class="fa-solid fa-clipboard"></i>   Manager</h4>
            </div>

            <div class="card-body">
                <p class="id"><i class="fa-solid fa-id-badge"></i> ${Manager.id}</p>
                <p class="email"><i class="fa-solid fa-envelope"></i><a href="mailto:${Manager.email}"> ${Manager.email}</a></p>
                <p class="office">Office Number: ${Manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer Card:
const createEngineerCard = function (Engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 text-center">
            <div class="card-header">
                <h2>${Engineer.name}</h2>
                <h4><i class="fa-solid fa-laptop"></i>   Engineer</h4>
            </div>

            <div class="card-body">
                <p class="id"><i class="fa-solid fa-id-badge"></i> ${Engineer.id}</p>
                <p class="email"><i class="fa-solid fa-envelope"></i><a href="mailto:${Engineer.email}"> ${Engineer.email}</a></p>
                <p class="github"><i class="fa-brands fa-github"></i><a href="https://github.com/${Engineer.github}" target="b"> ${Engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Intern Card:
const createInternCard = function (Intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 text-center">
            <div class="card-header">
                <h2>${Intern.name}</h2>
                <h4><i class="fa-solid fa-chalkboard-user"></i>   Intern</h4>
            </div> 

            <div class="card-body">
                <p class="id"><i class="fa-solid fa-id-badge"></i> ${Intern.id}</p>
                <p class="email"><i class="fa-solid fa-envelope"></i><a href="mailto:${Intern.email}"> ${Intern.email}</a></p>
                <p class="school"><i class="fa-solid fa-school"></i> ${Intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

// Push Employee Array to page
const templateHTML = (data) => {

    // set pageArray
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Manager
        if (role === 'Manager') {
            const managerCard = createManagerCard(employee);

            // Push to array
            pageArray.push(managerCard);
        }

        // Engineer
        if (role === 'Engineer') {
            const engineerCard = createEngineerCard(employee);

            pageArray.push(engineerCard);
        }

        // Intern
        if (role === 'Intern') {
            const internCard = createInternCard(employee);

            pageArray.push(internCard);
        }
    }

    // Create joined Employee Card from pageArray
    const employeeCards = pageArray.join('')

    // return to templateHTML
    const createTeam = createTeamPage(employeeCards);
    return createTeam;
}

// Create HTML Page
const createTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css">
        <title>Company Team Profiles</title>
    </head>
    <body>
        <header>
            <nav id="navbar" class="navbar">
                <span class="mb-0 h1 w-100 text-center">Employee Profiles</span>
            </nav>
        </header>

        <section>
            <div class="container">
                <div id="team-cards" class="row justify-content-center">
                    ${employeeCards}
                </div>
            </div>
        </section>
    
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>
    </html>
    `;
}

// module.export the page data for outside use
module.exports = templateHTML;