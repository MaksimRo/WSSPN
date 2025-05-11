document.addEventListener('DOMContentLoaded', function() {
    const newRequestsBtn = document.getElementById('newRequestsBtn');
    const archiveBtn = document.getElementById('archiveBtn');
    const newRequestsPanel = document.getElementById('newRequestsPanel');
    const archivePanel = document.getElementById('archivePanel');
    
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

    const requests = document.querySelectorAll('.new-request');
    let selectedRequest = null;
    
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

    const reportBtn = document.querySelector('.button.report');
    const closeBtn = document.querySelector('.button.close');
    
    reportBtn.addEventListener('click', function() {
        if (!selectedRequest) {
            alert('Пожалуйста, выберите заявку!');
            return;
        }
        alert('Отчёт СанПиН будет сгенерирован для выбранной заявки');
    });
    
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