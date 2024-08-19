document.addEventListener('DOMContentLoaded', function() {
    BrowserPrint.getLocalDevices(function(devices) {
        const printerSelect = document.getElementById('printerSelect');
        devices.forEach(device => {
            if (device.deviceType === 'printer') {
                const option = document.createElement('option');
                option.value = device.uid;
                option.textContent = device.name;
                printerSelect.appendChild(option);
            }
        });
    }, function(error) {
        console.error('Error getting devices:', error);
    });
});

function selectPrinter() {
    const selectedPrinterUid = document.getElementById('printerSelect').value;
    if (selectedPrinterUid) {
        BrowserPrint.getDevice(selectedPrinterUid, function(printer) {
            if (printer) {
                console.log(`Selected printer: ${printer.name}`);
                // Store the selected printer for later use
                window.selectedPrinter = printer;
            } else {
                console.error('No printer found');
            }
        }, function(error) {
            console.error('Error getting printer:', error);
        });
    }
}