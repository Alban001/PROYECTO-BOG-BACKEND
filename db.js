import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'bsfxqrjkxyu3dmhzc81k-mysql.services.clever-cloud.com',
    user: 'u4s61sbccdpxadwq',
    password:'u4s61sbccdpxadwq',
    database: 'bsfxqrjkxyu3dmhzc81k'
})