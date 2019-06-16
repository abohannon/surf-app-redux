import fetch from 'isomorphic-fetch'

const Query = {
  async buoyData(parent, { stationId }, content, info) {
    const response = await fetch(`https://www.ndbc.noaa.gov/data/realtime2/${stationId}.txt`)
    const json = await response.json()

    console.log(json)
    return json
  }
}

export default Query