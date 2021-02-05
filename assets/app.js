'use strict';

const url = 'https://randomuser.me/api/?results=12';
const loadMore = document.getElementById('loadmore');
getUsers();

function getUsers() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const getUser = data.results;
            getUser.forEach((element) => {
                const userShow = `
            <div class="col">
                <div class="user-card">
                    <div class="user-info">
                        <img src="${element.picture.medium}" alt="" class="user-img" />
                        <h4 class="user-name">${element.name.first} ${element.name.last} </h4>
                        <h6 class="user-country">${element.location.country}</h6>
                    </div>

                    <div class="user-contacts">
                        <ul>
                            <li><span class="icons icon-map"></span> <span class="text-primary">City:</span> ${element.location.city} </li>
                            <li><span class="icons icon-phone"></span> <span class="text-primary">Phone:</span> ${element.phone} </li>
                            <li><span class="icons icon-calendar"></span> <span class="text-primary">Age:</span> ${element.dob.age} Years Old </li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
                $('#results').append(userShow);
            });
        });
}

loadMore.addEventListener('click', function () {
    getUsers();
});
