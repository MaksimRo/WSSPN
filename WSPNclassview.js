document.addEventListener('DOMContentLoaded', function() {

    const newRequestsBtn = document.getElementById('newRequestsBtn');
    const archiveBtn = document.getElementById('archiveBtn');
    const newRequestsPanel = document.getElementById('newRequestsPanel');
    const archivePanel = document.getElementById('archivePanel');
    
    const modal = document.getElementById('modal');
    const modalCancel = document.querySelector('.modal-button.cancel');
    const modalSend = document.querySelector('.modal-button.send');
    
    const requests = document.querySelectorAll('.new-request');
    const reportBtn = document.querySelector('.button.report');
    const closeBtn = document.querySelector('.button.close');
    const searchInput = document.querySelector('.poisk');
    
    let selectedRequest = null;
    const allStudents = Array.from(requests);

    // Переключение между панелями
    newRequestsBtn.addEventListener('click', function() {
        newRequestsBtn.classList.add('active');
        archiveBtn.classList.remove('active');
        newRequestsPanel.style.display = 'block';
        archivePanel.style.display = 'none';
    });
    
    archiveBtn.addEventListener('click', function() {
        archiveBtn.classList.add('active');
        newRequestsBtn.classList.remove('active');
        archivePanel.style.display = 'block';
        newRequestsPanel.style.display = 'none';
    });

    // Выбор заявки
    requests.forEach(request => {
        request.addEventListener('click', function() {
            requests.forEach(r => {
                r.style.border = 'none';
                r.style.backgroundColor = '';
            });
            
            this.style.border = '2px solid rgb(58, 155, 19)';
            selectedRequest = this;
        });
    });
    
    // Поиск учеников
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        allStudents.forEach(student => {
            const studentName = student.querySelector('.value').textContent.toLowerCase();
            const studentClass = student.querySelectorAll('.value')[1].textContent.toLowerCase();
            
            if (studentName.includes(searchTerm)) {
                student.style.display = 'grid';
            } else {
                student.style.display = 'none';
            }
        });
    });
    
    // Открытие модального окна
    reportBtn.addEventListener('click', function() {
        if (!selectedRequest) {
            alert('Пожалуйста, выберите ученика!');
            return;
        }
        
        const fio = selectedRequest.querySelector('.value').textContent;
        
        // Устанавливаем данные в модальное окно
        document.querySelector('.modal-header h2').textContent = `УЧЕНИК/ЦА ${fio}`;
        
        // Показываем модальное окно
        modal.style.display = 'flex';
    });
    
    // Закрытие модального окна
    modalCancel.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Отправка формы
    modalSend.addEventListener('click', function() {
        alert('Заявка отправлена!');
        modal.style.display = 'none';
    });
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Закрытие заявки
    closeBtn.addEventListener('click', function() {
        if (!selectedRequest) {
            alert('Пожалуйста, выберите заявку!');
            return;
        }
        
        if(confirm('Вы уверены, что хотите закрыть выбранную заявку?')) {
            selectedRequest.style.opacity = '0.5';
            selectedRequest.style.pointerEvents = 'none';
            alert('Заявка закрыта');
            selectedRequest = null;
        }
    });
});