const people = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
      contact: {
        email: "john.doe@example.com",
      },
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
      social: {
        twitter: "@johndoe",
      },
      hobbies: ["Coding", "Hiking", "Photography"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      occupation: "Graphic Designer",
      contact: {
        email: "jane.smith@example.com",
        phone: "987-654-3210",
      },
      hobbies: ["Drawing", "Traveling"],
    },
    {
      id: 3,
      name: "Mark Johnson",
      age: 40,
      occupation: "Marketing Manager",
      contact: {
        email: "mark.johnson@example.com",
        phone: "123-456-7890",
      },
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60607",
      },
      hobbies: ["Running", "Golf"],
    },
  ];

const ul = document.querySelector('#people-list');
const displayInfo = document.querySelector('#person-info');
const noSelection = document.querySelector('#no-selection');
const persons = (peopleList) => {
    peopleList.map(person => {
        const li = document.createElement('li');
        li.innerText = person.name;
        li.classList.add('text-blue-700', 'font-bold');
        li.addEventListener('click', () => {
            findUniqueId(person.id);
        })
        ul.appendChild(li);
    });
    // console.log(peopleList)
} 

// display info
const showInfoScreen = (unique) => {
    const {name, occupation, contact, address, hobbies} = unique;
    displayInfo.classList.remove('hidden');
    noSelection.classList.add('hidden');
    displayInfo.innerHTML = `
      <h4 class="text-lg font-bold text-blue-700">Name : ${name || 'Not Available'}</h4>
      <p class="font-medium">Occupation :<span class="font-bold"> ${occupation || 'Not Available'}</span></p>
      <p class="font-medium">Contact : ${contact?.email || 'Not Available'}</p>
      <p class="font-medium">Address : ${address?.city || 'Not Available'}</p>
      <p class="font-medium">Hobbies : ${hobbies?.map(hobby => hobby) || 'Not Available'}</p>
    `;
}

const findUniqueId = (id) => {
    const unique = people.find(p => p.id == id);
    showInfoScreen(unique);
} 

persons(people);
