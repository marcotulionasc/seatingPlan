$(document).ready(function () {
    var selectedSeats = [];

    // Função para criar assentos em uma área específica
    function createSeats(containerId, areaName, totalSeats) {
        var $seatGrid = $('#' + containerId + ' .seat-grid');

        // Renderizar botões de assentos
        for (var i = 1; i <= totalSeats; i++) {
            $seatGrid.append('<button class="seat-button" data-area="' + areaName + '" data-seat="' + i + '">' + i + '</button>');
        }

        // Adicionar funcionalidade de seleção ao clicar nos botões
        $seatGrid.on('click', '.seat-button', function () {
            var areaName = $(this).data('area');
            var seatNumber = $(this).data('seat');
            var seatIndex = selectedSeats.findIndex(seat => seat.seatNumber === seatNumber && seat.areaName === areaName);

            if (seatIndex === -1) {
                // Assento não está selecionado, adicionar à lista
                selectedSeats.push({ areaName: areaName, seatNumber: seatNumber });
                $(this).addClass('selected');
            } else {
                // Assento está selecionado, remover da lista
                selectedSeats.splice(seatIndex, 1);
                $(this).removeClass('selected');
            }
        });
    }

    // Criar assentos para cada área
    createSeats('vip-container', 'Área VIP', 30);
    createSeats('box-container', 'Camarote', 20);
    createSeats('floor-container', 'Pista', 50);

    // Botão de checkout (fora da função createSeats)
    $('.checkout-btn').on('click', function () {
        // Exemplo de ação de checkout (pode ser substituída por sua lógica real de checkout)
        alert('Assentos selecionados:\n' + selectedSeats.map(seat => seat.areaName + ' - Assento ' + seat.seatNumber).join('\n'));
    });
});
