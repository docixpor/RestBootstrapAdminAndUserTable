let formNew = document.forms["formNewUser"];
addUser();

function addUser() {
    formNew.addEventListener("submit", ev => {
        ev.preventDefault();
        let newUserRoles = [];
        for (let i = 0; i < formNew.roles.options.length; i++) {
            if (formNew.roles.options[i].selected) newUserRoles.push({
                id: formNew.roles.options[i].value,
                role: "ROLE_" + formNew.roles.options[i].text
            });
        }

        fetch("http://localhost:8080/admin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formNew.username.value,
                lastName: formNew.lastName.value,
                age: formNew.age.value,
                email: formNew.email.value,
                password: formNew.password.value,
                roles: newUserRoles
            })
        }).then(() => {
            formNew.reset();
            tableOfAllUsers();
            $('#home-tab').click();
        });
    });
}