function bookParking() {
    const type = document.getElementById('vehicleType').value;
    let floor = "";
    if (type === "Truck") floor = "Ground Floor";
    else if (type === "Van") floor = "Floor 1";
    else floor = "Floor 1 or 2";
    
    document.getElementById('message').innerText = `Success! ${type} booked on ${floor}.`;
}