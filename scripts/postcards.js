const eventsStore = [
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15),
        image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
    },
    {
        title:
            "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image:
            "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image:
            "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 2, 14, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 75,
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2024, 2, 14, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
    },
];










const itemList = document.getElementById('events-near'); // Находим контейнер

// Проходимся по всем данным
for (const event of eventsStore) {
    const date = new Date(event.date);
    
    let options = {
        weekday: 'short',  // Сокращённый день недели (например, SUN)
        month: 'short',    // Сокращённый месяц (например, MAR)
        day: '2-digit',    // Два числа для дня месяца (например, 23)
        hour: '2-digit',   // Часы
        minute: '2-digit', // Минуты
        timeZoneName: 'short', // Часовой пояс (например, UTC)
        timeZone: 'UTC'    // Указываем, что нужно использовать UTC
    };

    // Форматируем дату с указанным временем в UTC
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
    
    // Преобразуем всю строку в верхний регистр
    const upperCaseDate = formattedDate.toUpperCase();

    // Создаем финальную строку с символом "•"
    const formattedString = upperCaseDate.replace(',' , ' •');

    const div = document.createElement('div');



    div.innerHTML = `
    <div class="v-card">
        <div class="cover" style="background-image: url('${event.image}'); background-size: cover;">
            <p class="type"><img src="/assets/images/icons/Camera.svg" alt="Camera"> Online Event</p>
        </div>
        <div class="info">
            <h4>${event.title}</h4>
            <p class="category">${event.category} (${event.distance} km)</p>
            <p class="date"><img src="/assets/images/icons/Calendar.svg" alt="Calendar"> ${formattedString}</p>
            <div style="display: flex;">
                <span class="attendees">
                    <img src="/assets/images/icons/CheckMark.svg" alt="CheckMark"> 
                    ${event.attendees ? `${event.attendees} attendees` : ''}
                </span>
                <span class="cost" ${
                    event.attendees ? "style='margin-left: 16px;'" : ""
                  }>
                    <img src="/assets/images/icons/Ticket.svg" alt="Ticket"> Free
                </span>
            </div>
        </div>
    </div>
    `;

    // Проверяем наличие участников
    const attendeesElement = div.querySelector('.attendees');
    if (!event.attendees) {
        attendeesElement.style.display = 'none'; // Скрываем, если участников нет
    }

    itemList.appendChild(div);
}









// const itemListOnline = document.getElementById('online-events-cards'); // Находим контейнер

// let cardCount = 0; // Счётчик карточек

// // Проходимся по всем данным
// for (const event of eventsStore) {
//     if (cardCount >= 3) break; // Прерываем цикл, если уже добавлено 3 карточки

//     const date = new Date(event.date);
    
//     let options = {
//         weekday: 'short',  // Сокращённый день недели (например, SUN)
//         month: 'short',    // Сокращённый месяц (например, MAR)
//         day: '2-digit',    // Два числа для дня месяца (например, 23)
//         hour: '2-digit',   // Часы
//         minute: '2-digit', // Минуты
//         timeZoneName: 'short', // Часовой пояс (например, UTC)
//         timeZone: 'UTC'    // Указываем, что нужно использовать UTC
//     };

//     // Форматируем дату с указанным временем в UTC
//     const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
    
//     // Преобразуем всю строку в верхний регистр
//     const upperCaseDate = formattedDate.toUpperCase();

//     // Создаем финальную строку с символом "•"
//     const formattedString = upperCaseDate.replace(',' , ' •');

//     const div = document.createElement('div');

//     div.innerHTML = `
//     <div class="v-card">
//         <div class="cover" style="background-image: url('${event.image}'); background-size: cover;">
//             <p class="type"><img src="/assets/images/icons/Camera.svg" alt="Camera"> Online Event</p>
//         </div>
//         <div class="info">
//             <h4>${event.title}</h4>
//             <p class="category">${event.category} (${event.distance} km)</p>
//             <p class="date"><img src="/assets/images/icons/Calendar.svg" alt="Calendar"> ${formattedString}</p>
//             <div style="display: flex;">
//                 <span class="attendees">
//                     <img src="/assets/images/icons/CheckMark.svg" alt="CheckMark"> 
//                     ${event.attendees ? `${event.attendees} attendees` : ''}
//                 </span>
//                 <span class="cost" ${
//                     event.attendees ? "style='margin-left: 16px;'" : ""
//                   }>
//                     <img src="/assets/images/icons/Ticket.svg" alt="Ticket"> Free
//                 </span>
//             </div>
//         </div>
//     </div>
//     `;

//     // Проверяем наличие участников
//     const attendeesElement = div.querySelector('.attendees');
//     if (!event.attendees) {
//         attendeesElement.style.display = 'none'; // Скрываем, если участников нет
//     }

//     itemListOnline.appendChild(div);

//     cardCount++; // Увеличиваем счётчик карточек
// }























// for (const event of eventsStore) {
    //     const div = document.createElement('div');
    //     div.classList.add('v-card');
    
    //     div.innerHTML = `
    //         <div class="cover" style="background-image: url('${event.image}');">
    //             ${event.type === "online" ? '<p class="type"><img src="/assets/images/icons/Camera.svg" alt="Online event"> Online Event</p>' : ""}
    //         </div>
    //         <div class="content">
    //             <h3 class="event-title">${event.title}</h3>
    //             <p class="event-description">${event.description}</p>
    //             <p class="event-category">Category: ${event.category}</p>
    //             <p class="event-distance">Distance: ${event.distance} km</p>
    //         </div>
    //     `;
    
    //     Itemlist.appendChild(div);
    // }
    
   
    
    // div.innerHTML = `  <div class="h-card">
    //         <img src="${event.image}" alt="cover">
    //         <div class="info">
    //             <p class="date">${event.date}</p>
    //             <h4>${event.title}</h4>
    //             <p class="category">${event.category} (${event.distance} km)</p>
    //             <p class="attendees">${event.attendees ? event.attendees : ""} ${event.attendees ? "attendees" : ""}</p>
    //         </div>
    //     </div>`;