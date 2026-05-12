  function onScanSuccess(decodedText) {
      document.getElementById("qr-result").innerText =
        "QR detectado: " + decodedText;

      // Redirección automática si es un link
      if (decodedText.startsWith("http")) {
        window.location.href = decodedText;
      }
    }

    function onScanError(errorMessage) { }

    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 200 },
      false,
    );

    scanner.render(onScanSuccess, onScanError);