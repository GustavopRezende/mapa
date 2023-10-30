import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function OptimizedMap() {
  const [markers, setMarkers] = useState([]);
  const rioDeJaneiroCoordinates = [-22.9068, -43.1729]; // Coordenadas do Rio de Janeiro

  useEffect(() => {
    // Carregue os marcadores somente quando o componente for montado
    fetch('https://api.example.com/markers') // Substitua pela sua fonte de dados
      .then((response) => response.json())
      .then((data) => setMarkers(data));
  }, []);

  return (
    <MapContainer
      center={rioDeJaneiroCoordinates}
      zoom={13}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]}>
          {/* Adicione pop-ups ou outros componentes específicos para cada marcador */}
        </Marker>
      ))}
    </MapContainer>
  );
}

export default OptimizedMap;
