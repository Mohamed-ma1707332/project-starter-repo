import  { openDB } from "https://unpkg.com/idb?module";

const dbName = 'incidents-project';   // string, database name
const incidentsStoreName = 'incidents';

// const db = new Localbase ('project.inci')
async function getData() {

    let url = 'data/principle.json';
    let data = await fetch (url)
    return await data.json();

    //log(data)
}

async function getDB() {

    const db = await openDB(dbName, incidentsStoreName);

    /******
     * Init DB with data from JOSN file *
     ******/
    const incidentsCount = await db.count(incidentsStoreName);
    if (incidentsCount === 0) {
        const incidents = await getData();
        for (const incident of incidents) {
            await db.add(incidentsStoreName, incidents);
        }
    }
    return db;

}