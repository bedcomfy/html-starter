function selectPrinter() {
    const selectedPrinter = document.getElementById('printerSelect').value;
    if (selectedPrinter) {
        BrowserPrint.getDefaultDevice('printer', function(printer) {
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