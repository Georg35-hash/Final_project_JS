
<script>
        async function loadJSONToSelect() {
          try {
            // Загружаем JSON (путь к файлу можно изменить на реальный)
            const response = await fetch('launch.json');
            const regions = await response.json();

            // Получаем элемент select по id
            const selectElement = document.getElementById('region-select');

            // Проходимся по списку регионов и создаем option для каждого
            regions.forEach(region => {
                const option = document.createElement('option');
                option.value = region.id;  // Устанавливаем id региона как value
                option.textContent = region.region;  // Отображаемое имя региона

                // Вставляем опцию в select
                selectElement.appendChild(option);
            });
        } catch (error) {
            console.error('Ошибка загрузки регионов:', error);
        }
    }
    </script>