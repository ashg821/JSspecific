let cvData = [
    {
        name: 'Kiran Kumar',
        age: 23,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'Kishore Lal',
        age: 40,
        city: 'Thane',
        language: 'C#',
        framework: 'Hyper',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        name: 'Mia Khalifa',
        age: 28,
        city: 'California',
        language: 'Go',
        framework: 'Go',
        image: 'https://randomuser.me/api/portraits/women/71.jpg'
    },
    {
        name: 'Ramya',
        age: 44,
        city: 'Krishna',
        language: 'Java',
        framework: 'Java Framework',
        image: 'https://randomuser.me/api/portraits/women/99.jpg'
    },
    {
        name: 'Kristofer',
        age: 22,
        city: 'London',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    }
];
function cvIterator() {
    let index = 0;
    return {
        next: function () {
            return (index < cvData.length) ? { value: cvData[index++], done: false } : { done: true };
        }
    }
}
const candidate = cvIterator();

nextfun();

let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', nextfun);

function nextfun() {
    let currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'><img>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">Age is ${currentCandidate.age}</li>
        <li class="list-group-item">Lives in ${currentCandidate.city} city</li>
        <li class="list-group-item">Use ${currentCandidate.language} programming language</li>
        <li class="list-group-item">Works in ${currentCandidate.framework} framework</li>
      </ul>`;
    }
    else {
        alert('End of candidate list');
        location.reload();
    }
}