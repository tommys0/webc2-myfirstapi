const api = 'https://randomuser.me/api/';

async function getData() {
    const response = await fetch(api);

    if (response.ok) {
        return await response.json();
    }

    return null;
}

async function displayInfo() {
    const data = await getData();
    const infoList = document.getElementById('infoList');

    if (data) {
        data.results.forEach(result => {
            const p = document.createElement('p');

            const name = document.createElement('p');
            name.textContent = 'Name: ' + result.name.title + ' ' + result.name.first + ' ' + result.name.last;
            p.appendChild(name);

            const gender = document.createElement('p');
            gender.textContent = 'Gender: ' + result.gender;
            p.appendChild(gender);

            const dob = document.createElement('p');
            dob.textContent = 'Date of Birth: ' + result.dob.date;
            p.appendChild(dob);

            const age = document.createElement('p');
            age.textContent = 'Age: ' + result.dob.age;
            p.appendChild(age);

            const email = document.createElement('p');
            email.textContent = 'Email: ' + result.email;
            p.appendChild(email);

            const phone = document.createElement('p');
            phone.textContent = 'Phone: ' + result.phone;
            p.appendChild(phone);

            const cell = document.createElement('p');
            cell.textContent = 'Cell: ' + result.cell;
            p.appendChild(cell);

            const location = document.createElement('p');
            location.textContent = 'Location: ' + result.location.street.name + ' ' + result.location.street.number + ', ' + result.location.city + ', ' + result.location.state + ', ' + result.location.country + ', ' +
                result.location.postcode;
            p.appendChild(location);

            const coordinates = document.createElement('p');
            coordinates.textContent = 'Coordinates: ' + result.location.coordinates.latitude + ', ' + result.location.coordinates.longitude;
            p.appendChild(coordinates);

            const timezone = document.createElement('p');
            timezone.textContent = 'Timezone: ' + result.location.timezone.description + ' (UTC ' + result.location.timezone.offset + ')';
            p.appendChild(timezone);

            const nationality = document.createElement('p');
            nationality.textContent = 'Nationality: ' + result.nat;
            p.appendChild(nationality);

            infoList.appendChild(p);
        });
    }
}

displayInfo();


fetch('https://1.1.1.1/cdn-cgi/trace')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        lines.forEach(line => {
            const [key, value] = line.split('=');
            console.log(`${key}: ${value}`);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
