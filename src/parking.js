function bookParking() {
    const type = document.getElementById('vehicleType').value;
    let floor = "";
    let price = "";

    if (type === "Truck") { floor = "Ground Floor"; price = "$25"; }
    else if (type === "Van") { floor = "Floor 1"; price = "$15"; }
    else { floor = "Floor 1 or 2"; price = "$10"; }
    
    document.getElementById('message').innerText = `Success! ${type} booked on ${floor}.`;
    document.getElementById('fee').innerText = `Estimated Fee: ${price}`;
}
