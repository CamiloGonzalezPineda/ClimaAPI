import { renderClima } from "./componentes/RenderClima.js"

const app = document.getElementById('app')
app.innerHTML = renderClima()
export async function clima() {

    const url = 'https://api.open-meteo.com/v1/forecast?latitude=6.2518&longitude=-75.5636&hourly=wind_speed_10m,precipitation,temperature_2m&timezone=auto'

    const traer = await fetch(url)
    const recive = await traer.json()

    const temperatura = recive.hourly.temperature_2m[0]
    const velocidad = recive.hourly.wind_speed_10m[0]
    const precipitacion = recive.hourly.precipitation[0]
 
    document.getElementById('temp').textContent = `${temperatura}°C`
    document.getElementById('velo').textContent = `${velocidad} km/h`
    document.getElementById('preci').textContent = `${precipitacion} mm`




}



window.addEventListener('DOMContentLoaded', clima)

