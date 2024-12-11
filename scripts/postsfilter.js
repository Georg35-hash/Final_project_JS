
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




function filterEvents() {
    const categoryFilter = document.getElementById('filterCategory').value;
    const typeFilter = document.getElementById('filterType').value;
    const distanceFilter = document.getElementById('filterlterDistance').value
    const dayFilter = document.getElementById('filterDay').value

    const filteredEvents = eventsStore.filter(event => {
        const category = categoryFilter === 'all' || event.category === categoryFilter;
        const type = typeFilter === 'all' || event.type === typeFilter;
        const distance = distanceFilter === 'all' || event.distance >= parseFloat(distanceFilter);

        // Фильтрация по дате
        const day =
        !dayFilterValue || new Date(dayFilter).getTime() === event.date.getTime()
        
        return category && type && distance && day;
    });

    renderEvents(filteredEvents);
}




function renderEvents(events) {
    const eventsList = document.getElementById('all-events');
    eventsList.innerHTML = '';  // Очистить текущий список

    if (events.length === 0) {
        eventsList.innerHTML = '<p class="Error">No events found matching your filters.</p>';
        return;
    }

    events.forEach(event => {
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
        const formattedString = upperCaseDate.replace(',', ' •');


        const eventItem = document.createElement('div');
        eventItem.classList.add('h-card');
        eventItem.innerHTML =    `
        
        <div class="h-card">
    <img src="${event.image}" alt="cover">
    <div class="info">
        <p class="date">${formattedString}</p>
        <h4>${event.title}</h4>
        <p class="category">${event.category} (${event.distance
            } km)</p>
            
        <p class="attendees">${event.attendees ? event.attendees : ""
            } ${event.attendees ? "attendees" : ""}</p>
    </div>
</div>`;

        eventsList.appendChild(eventItem);
    });
}

// Изначальный рендер всех событий
renderEvents(eventsStore);