# REST API – Work Experience

Detta repository innehåller ett REST API byggt med Node.js, Express och MongoDB (via Mongoose). API:et hanterar arbetserfarenheter och implementerar full CRUD-funktionalitet (Create, Read, Update, Delete).
Data lagras i en MongoDB-databas som dokument i en collection.

---

## Länk

En lokal version av API:et körs på:

http://localhost:5000/api/work

---

## Installation & databas

API:et använder en MondoDB-databas. Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket. Starta sedan servern med npm run dev.

---

## Användning

| **Metod** | **Ändpunkt**  | **Beskrivning**                                                                   |
| --------- | ------------- | --------------------------------------------------------------------------------- |
| GET       | /api/work     | Hämtar alla tillgängliga poster.                                                  |
| GET       | /api/work/:ID | Hämtar en specifik post med angivet ID.                                           |
| POST      | /api/work     | Lagrar en ny post. Kräver att ett objekt skickas med.                             |
| PUT       | /api/work/:ID | Uppdaterar en existerande post med angivet ID. Kräver att ett objekt skickas med. |
| DELETE    | /api/work/:ID | Raderar en post med angivet ID.                                                   |

Ett objekt returneras/skickas som JSON med följande struktur:

```
{
  "_id": "ObjectId",
  "company": "Google",
  "role": "Frontend Developer",
  "description": "Worked with React and APIs",
  "years": 2
}
```