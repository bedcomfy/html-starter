document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    BrowserPrint.getLocalDevices(function(devices) {
        console.log('Devices detected:', devices);
        const printerSelect = document.getElementById('printerSelect');
        
        // Check if devices is an array
        if (Array.isArray(devices)) {
            devices.forEach(device => {
                if (device.deviceType === 'printer') {
                    console.log('Printer detected:', device);
                    const option = document.createElement('option');
                    option.value = device.uid;
                    option.textContent = device.name;
                    printerSelect.appendChild(option);
                }
            });
        } else {
            console.error('Devices is not an array:', devices);
        }
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