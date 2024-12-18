function initMap() {
  const loc = { lat: 47.9111447, lng: 106.9376779 };

  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}
